import urllib.request
import urllib.error
from html.parser import HTMLParser

class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            href = dict(attrs).get('href')
            if href and href.startswith('/logo/'):
                self.links.append(href)

queries = ['Bubble','Webflow','Retool','n8n','Cursor','Supabase','Google+BigQuery','Power+BI','Tableau','WordPress','OpenAI','Django','Python','Angular','Java','Zapier']
for q in queries:
    url = 'https://www.worldvectorlogo.com/search?q=' + q
    print('---', q, '---')
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=20) as response:
            page = response.read().decode('utf-8', errors='ignore')
        parser = LinkParser()
        parser.feed(page)
        for link in sorted(set(parser.links)):
            print(link)
    except Exception as e:
        print('ERROR', type(e).__name__, e)
