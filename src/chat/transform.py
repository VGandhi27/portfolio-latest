from sentence_transformers import SentenceTransformer
import psycopg2
import numpy as np

# Load the sentence transformer model
model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

# Function to store text embeddings in PostgreSQL
def store_embedding(text):
    try:
        # Generate sentence embedding
        embedding = model.encode(text).tolist()  # Convert numpy array to list
        
        # Connect to PostgreSQL
        conn = psycopg2.connect(
            dbname="portfolio",
            user="postgres",
            password="root",
            host="localhost",
            port=5433  
        )
        cur = conn.cursor()

        # Insert data into embeddings table
        cur.execute("INSERT INTO embeddings (content, embedding) VALUES (%s, %s)", (text, embedding))
        
        # Commit and close connection
        conn.commit()
        cur.close()
        conn.close()
        print("✅ Data inserted successfully!")

    except Exception as e:
        print(f"❌ Error: {e}")

# Read text file and store embeddings
file_path = "data.txt"

try:
    with open(file_path, "r", encoding="utf-8") as file:
        text = file.read().strip()  # Read and strip whitespace
    print(f"📄 Read text from file: {text[:100]}...")  # Show a preview (first 100 chars)
    store_embedding(text)  # Store embedding in the database
except FileNotFoundError:
    print(f"❌ Error: File '{file_path}' not found.")
except Exception as e:
    print(f"❌ Unexpected error: {e}")
