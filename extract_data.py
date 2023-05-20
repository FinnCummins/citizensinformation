from bs4 import BeautifulSoup
import glob
import pandas as pd
import re
data = glob.glob("data/*")
extracted_data = []
sum = 0.0001
total = 0.0001
for idx, file in enumerate(data):
    print(f"{idx/len(data)*100:.2f}, avg {sum/total}")
    with open(file,"r",encoding="utf8") as html:
        soup = BeautifulSoup(html.read(), 'html.parser')
        if re.search("money",file) == None:
            continue
        # Iterate through the DOM
        for tag in soup.descendants:
            if tag.name == 'div':
                if 'block-richtext' in tag.get('class', []):
                    total +=1
                    # Extract and print text from nodes within <div class="block-richtext">
                    richtext_content = tag.get_text(strip=True, separator=" ")
                    print(f'Text from <div class="block-richtext">: {richtext_content}')
                    extracted_data.append({"body":richtext_content.replace("\n"," "),"length":len(richtext_content.replace("\n"," "))})
                    sum += len(richtext_content.replace("\n"," "))
df = pd.DataFrame(extracted_data)
df.to_csv("extracted_data_tax.csv")