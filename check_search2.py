import urllib.request
import urllib.error
queries = ['React+logo','Webflow+logo','Retool+logo','n8n+logo','Cursor+logo','Supabase+logo','Google+BigQuery+logo','Power+BI+logo','Tableau+logo','WordPress+logo','OpenAI+logo','Django+logo','Python+logo','Angular+logo','Java+logo','Bubble+logo','Zapier+logo']
for q in queries:
    url = 'https://www.worldvectorlogo.com/search?q=' + q
    print('---', q.replace('+',' '), '---')
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=15) as response:
            page = response.read().decode('utf-8', errors='ignore')
        seen = set()
        for line in page.splitlines():
            if '/logo/' in line:
                if 'href="' in line:
                    start = line.find('href="') + 6
                    end = line.find('"', start)
                    if end > start:
                        href = line[start:end]
                        if href not in seen:
                            seen.add(href)
                            print(href)
    except Exception as e:
        print('ERROR', type(e).__name__, e)
