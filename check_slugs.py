import urllib.request
import urllib.error
slugs = ['bubble-io','webflow','retool','n8n','zapier','cursor','openai','react','react-2','django','supabase','power-bi','tableau','python','google-bigquery','angular','wordpress','java']
for slug in slugs:
    url = f'https://www.worldvectorlogo.com/logo/{slug}.svg'
    try:
        req = urllib.request.Request(url, method='HEAD')
        with urllib.request.urlopen(req, timeout=10) as response:
            print(url, response.status)
    except urllib.error.HTTPError as e:
        print(url, e.code)
    except Exception as e:
        print(url, 'ERROR', type(e).__name__, e)
