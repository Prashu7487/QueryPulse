from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Access the variables
ES_URL = os.getenv("ES_URL")
API_KEY = os.getenv("API_KEY")
LOAD_PATH = os.getenv("LOAD_PATH")
INDEX_NAME = os.getenv("INDEX_NAME")
