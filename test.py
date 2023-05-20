from openai.embeddings_utils import cosine_similarity
import pandas as pd
import openai
import numpy as np
question = 'What form do I need to submit if I just bought ETFs'
df = pd.read_csv("embedded_data_tax.csv")
df["embedding"] = df.embedding.apply(eval).apply(np.array)

def search_reviews(df, product_description, n=2, pprint=True):
   embedding =  openai.Embedding.create(input = product_description, model="text-embedding-ada-002")['data'][0]['embedding']
   df['similarities'] = df.embedding.apply(lambda x: cosine_similarity(x, embedding))
   res = df.sort_values('similarities', ascending=False).head(n)
   return res

res = search_reviews(df, question, n=3)
print(res)
context = " ".join(res["text"].tolist())


reply = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
        {"role": "system", "content": "You are a helpful tax agent."},
        {"role": "user", "content": f"Answer this question: {question}\n\n Context of question:\n{context}"},
    ]
)

print(reply["choices"][0]["message"]["content"])
