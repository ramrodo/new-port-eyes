# To add a new cell, type '# %%'
# To add a new markdown cell, type '# %% [markdown]'
# %%
import requests
from bs4 import BeautifulSoup


# %%
URL = 'https://portafolioinfo.cnbv.gob.mx/PUBLICACIONES/SH/Paginas/bm.aspx'
page = requests.get(URL)


# %%
soup = BeautifulSoup(page.content, 'html.parser')


# %%
step_1 = soup.prettify().split('var jsonData = ')
step_2 = " ".join(step_1[1].split())
jsonData = step_2.split('; var columns = ', 1)[0]


# %%
baseURL = 'https://portafolioinfo.cnbv.gob.mx'
listData = eval(jsonData)
arrayLinks = []
linkToDownload = baseURL + listData[0][4]
# for item in listData:
#     year = item[1]
#     month = item[2]
#     fileData = item[4]
#     linkToDownload = baseURL + fileData
#     arrayLinks.append(linkToDownload)

# print(arrayLinks[0])
print(linkToDownload)


