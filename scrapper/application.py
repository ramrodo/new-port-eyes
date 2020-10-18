import requests
from flask import Flask, jsonify
from bs4 import BeautifulSoup

def fetch_last_banca():
    URL = 'https://portafolioinfo.cnbv.gob.mx/PUBLICACIONES/SH/Paginas/bm.aspx'
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, 'html.parser')
    step_1 = soup.prettify().split('var jsonData = ')
    step_2 = " ".join(step_1[1].split())
    jsonData = step_2.split('; var columns = ', 1)[0]
    baseURL = 'https://portafolioinfo.cnbv.gob.mx'
    listData = eval(jsonData)
    linkToDownload = baseURL + listData[0][4]
    return jsonify({
        "url": linkToDownload,
    })

# EB looks for an 'application' callable by default.
application = Flask(__name__)

application.add_url_rule('/last-banca', 'index', (lambda: fetch_last_banca()))

# run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    application.debug = False
    application.run()
