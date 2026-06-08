import urllib.request
import urllib.error
candidates = {
    'bubble': ['bubble','bubble-io','bubble-logo','bubble-io-logo','bubble-logo-1','bubble-io-1'],
    'webflow': ['webflow','webflow-logo','webflow-logo-1'],
    'retool': ['retool','retool-logo','retool-logo-1','retool-logo-2'],
    'n8n': ['n8n','n8n-pinkblack','n8n-pinkwhite','n8n-full-black-1'],
    'cursor': ['cursor','cursor-logo','cursor-icon','windows-cursor'],
    'openai': ['openai','openai-logo','openai-logo-1','openai-logo-2'],
    'react': ['react','react-logo','react-js','react-js-1','react-2','react-logo-1'],
    'django': ['django','django-logo','django-logo-1','django-oscar','django-wordmark'],
    'supabase': ['supabase','supabase-logo','supabase-logo-1'],
    'power-bi': ['power-bi','power-bi-logo','power-bi-logo-1'],
    'tableau': ['tableau','tableau-software','tableau-logo','tableau-logo-1'],
    'python': ['python','python-logo','python-logo-and-wordmark','python-wordmark'],
    'google-bigquery': ['google-bigquery','google-bigquery-logo','google-bigquery-logo-1'],
    'angular': ['angular','angular-logo','angularjs-logo','angular-logo-1'],
    'wordpress': ['wordpress','wordpress-icon','wordpress-icon-1','wordpress-blue-1'],
    'java': ['java','java-logo','java-wordmark','java-logo-1'],
    'zapier': ['zapier','zapier-logo','zapier-logo-1','zapier-logo-2']
}
for key, slugs in candidates.items():
    print('---', key, '---')
    for slug in slugs:
        url = f'https://www.worldvectorlogo.com/logo/{slug}.svg'
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=15) as response:
                print(slug, response.status)
        except urllib.error.HTTPError as e:
            print(slug, e.code)
        except Exception as e:
            print(slug, 'ERR', type(e).__name__)
