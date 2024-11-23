from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')

save_path = "./query_encoder_model"

model.save(save_path)
print(f"Model saved to {save_path}")

load_path = "./query_encoder_model"

# Load the model
model = SentenceTransformer(load_path)
msg = len(model.encode("This is model load testing").tolist())
if(msg==384):
    print("Model loaded successfully")
else:
    print("Model not loaded")

