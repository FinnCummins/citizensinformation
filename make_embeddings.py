import openai
import pandas as pd
import time
df = pd.read_csv("extracted_data_tax.csv")

data = []
for index, row in df.iterrows():
    try:
        embedding = openai.Embedding.create(input = str(row["body"]).replace("\n", " "), model="text-embedding-ada-002")['data'][0]['embedding']
    except:
        time.sleep(1)
        embedding = openai.Embedding.create(input = str(row["body"]).replace("\n", " "), model="text-embedding-ada-002")['data'][0]['embedding']
        print(f"e: {index}")
    finally:
        print(f"{index}")
        data.append({"text":str(row["body"]).replace("\n", " "),"embedding":embedding})

df2 = pd.DataFrame(data)
df2.to_csv('embedded_data_tax.csv', index=False)


df2 = pd.DataFrame(data)
df2.to_csv('embedded_data.csv', index=False)