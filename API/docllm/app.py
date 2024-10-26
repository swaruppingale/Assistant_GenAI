# LangChain components to use
from langchain.vectorstores.cassandra import Cassandra
from langchain.indexes.vectorstore import VectorStoreIndexWrapper
from langchain.llms import OpenAI
from langchain.embeddings import OpenAIEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from datasets import load_dataset
from PyPDF2 import PdfReader
from flask import Flask, request, jsonify
import cassio


pdfreader = PdfReader('./book_1.pdf')
raw_text = ''
for i, page in enumerate(pdfreader.pages):
    content = page.extract_text()
    if content:
        raw_text += content

cassio.init(token=ASTRA_DB_APPLICATION_TOKEN, database_id=ASTRA_DB_ID)

llm = OpenAI(openai_api_key=OPENAI_API_KEY)
embedding = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)

astra_vector_store = Cassandra(
    embedding=embedding,
    table_name="qa_mini_demo",
    session=None,
    keyspace=None,
)

text_splitter = CharacterTextSplitter(
    separator="\n",
    chunk_size=800,
    chunk_overlap=200,
    length_function=len,
)
texts = text_splitter.split_text(raw_text)

astra_vector_store.add_texts(texts[:50])
print("Inserted %i headlines." % len(texts[:50]))

astra_vector_index = VectorStoreIndexWrapper(vectorstore=astra_vector_store)

def inference(query_text):
    answer = astra_vector_index.query(query_text, llm=llm).strip()
    return answer

app = Flask(__name__)

@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.json
    query_text = data.get('question')

    if not query_text:
        return jsonify({'error': 'Question not provided'}), 400

    answer = inference(query_text)
    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(port=5001)
