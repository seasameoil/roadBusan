from fileinput import close
from logging.handlers import TimedRotatingFileHandler
import requests
from bs4 import BeautifulSoup

url = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EB%B6%80%EC%82%B0%EC%A4%91%EA%B5%AC%EB%A7%9B%EC%A7%91'
response = requests.get(url)

if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(response.content.decode('euc-kr'), 'html.parser')
    title = soup.select('#place-main-section-root > section.sc_new._1hPYK > div > ul > li:nth-child(3) > div._3hn9q > a > div > div > span.place_bluelink.OXiLu')
    f = open("ddd.html",'a')
    print(title,file=f)
else :
    print(response.status_code)
# search = browser.find_element(By.ID, 'searchboxinput')
# search.send_keys('부산중구맛집')
# Element = browser.find_element(By.ID, 'searchbox-searchbutton')
# Element.click()

# html = browser.page_source
# soup = BeautifulSoup(html, 'html.parser')
# titles = soup.select_one('.m6QErb DxyBCb kA9KIf dS8AEf ecceSd')

    
# for title in titles:
#     f = open('buk-gu-activity.html','w')
#     print(title.get_text(),file="a")

