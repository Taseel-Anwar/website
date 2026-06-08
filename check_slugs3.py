import urllib.request
import urllib.error
import ssl

slugs = ['bubble-io','webflow','retool','n8n','zapier','cursor','openai','react','react-2','django','supabase','power-bi','tableau','python','google-bigquery','angular','wordpress','java']
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Referer': 'https://www.worldvectorlogo.com/'
}
for slug in slugs:
    url = f'https://www.worldvectorlogo.com/logo/{slug}.svg'
    req = urllib.request.Request(url, headers=headers, method='GET')
    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            print(slug, response.status, response.getheader('Content-Type'))
    except urllib.error.HTTPError as e:
        print(slug, 'HTTP', e.code)
    except Exception as e:
        print(slug, 'ERR', type(e).__name__, e)
