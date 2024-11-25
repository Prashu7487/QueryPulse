import json
import sys
from elasticsearch import Elasticsearch
from elasticsearch.helpers import bulk
import csv
from pprint import pprint
from sentence_transformers import SentenceTransformer
from backend.utils.config import API_KEY, ES_URL, INDEX_NAME

# Constants
BULK_CHUNK_SIZE = 1000  # Number of documents per bulk request
NUM_QUESTIONS_INDEXED = None  # Limit doc for indexing
DATA_FILE = './data/Questions.csv'  # Path to the questions file
LOAD_PATH = './query_encoder_model'  #don't load from .env, relative path different for both

client = Elasticsearch(ES_URL, api_key=API_KEY)
# pprint(client.info())

# connect to ES on localhost on port 9200
if client.ping():
	print('Connected to ES!')
else:
	print('Could not connect!')
	sys.exit()


print("\n\n\tPress Y or y to start indexing..")
choice = input()
if(choice!='Y' and choice !='y'):
     sys.exit()

# Define the Elasticsearch index with mappings
b = {
    "mappings": {
        "properties": {
            "title": {
                "type": "text"
            },
            "title_vector": {
                "type": "dense_vector",
                "dims": 384  # dimensions for BERT embeddings 
            }
        }
    }
}

# Create the index
ret = client.options(ignore_status=[400]).indices.create(index=INDEX_NAME, body=b)  # Ignore if the index already exists

# Loading model
model = model = SentenceTransformer(LOAD_PATH)  

def generate_bulk_data(file_path, model, chunk_size, num_limit=None):
    cnt = 0
    with open(file_path, encoding="latin1") as csvfile:
        readCSV = csv.reader(csvfile, delimiter=',')
        next(readCSV, None)  # Skipping the headers
        actions = []

        for row in readCSV:
            # Extract data
            doc_id = row[0]
            title = row[5]

            # print(doc_id," ",title)
            title_vector = model.encode(title).tolist()
            # print(len(title_vector))

            # Create the action for bulk indexing
            action = {
                "_index": "querypulse_db",
                "_id": doc_id,
                "_source": {
                    "title": title,
                    "title_vector": title_vector
                }
            }
            actions.append(action)
            cnt += 1

            # When chunk size is reached, yield the batch and reset actions
            if len(actions) == chunk_size:
                yield actions
                actions = []

            # Stop if the limit is reached
            if cnt is not None and cnt == num_limit:
                break

        # Yield any remaining actions
        if actions:
            yield actions


# Perform bulk indexing
print("Starting bulk indexing...")

#deleting if exists previously
client.indices.delete(index="querypulse_db")

for batch in generate_bulk_data(DATA_FILE, model, BULK_CHUNK_SIZE, NUM_QUESTIONS_INDEXED):
    from elasticsearch.helpers import BulkIndexError

    try:
        bulk(client, batch)
        print(f"Indexed {len(batch)} documents.")
    except BulkIndexError as e:
        for error in e.errors:
            print("Error:", error)

    print(f"Indexed {len(batch)} documents.")

print("Completed indexing.")
print("*********************************************************************************")


