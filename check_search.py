import urllib.request
import urllib.error
queries = ['React','Webflow','Retool','n8n','Cursor','Supabase','Google+BigQuery','Power+BI','Tableau','WordPress']
for q in queries:
    url = 'https://www.worldvectorlogo.com/search?q=' + q
    print('---', q, '---')
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=15) as response:
            page = response.read().decode('utf-8', errors='ignore')
        for line in page.splitlines():
            if '/logo/' in line:
                print(line.strip())
    except Exception as e:
        print('ERROR', type(e).__name__, e)
