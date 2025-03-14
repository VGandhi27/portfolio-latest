import psycopg2

conn = psycopg2.connect("dbname=portfolio user=postgres password=root host=localhost port=5433")
cur = conn.cursor()

cur.execute("SELECT id, content FROM embeddings LIMIT 5;")
rows = cur.fetchall()

for row in rows:
    print(f"ID: {row[0]}")
    print(f"Content: {row[1]}\n")  # No encoding/decoding
    print("-" * 50)

cur.close()
conn.close()
