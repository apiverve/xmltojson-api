"""
XML to JSON API - Basic Usage Example

This example demonstrates the basic usage of the XML to JSON API.
API Documentation: https://docs.apiverve.com/ref/xmltojson
"""

import os
import requests
import json

API_KEY = os.getenv('APIVERVE_API_KEY', 'YOUR_API_KEY_HERE')
API_URL = 'https://api.apiverve.com/v1/xmltojson'

def call_xmltojson_api():
    """
    Make a POST request to the XML to JSON API
    """
    try:
        # Request body
        request_body &#x3D; {
    &#x27;xml&#x27;: &#x27;&lt;?xml version&#x3D;\&#x27;1.0\&#x27; encoding&#x3D;\&#x27;UTF-8\&#x27;?&gt;\n&lt;note&gt;\n  &lt;to&gt;Tove&lt;/to&gt;\n  &lt;from&gt;Jani&lt;/from&gt;\n  &lt;heading&gt;Reminder&lt;/heading&gt;\n  &lt;body&gt;Don&#x27;t forget me this weekend!&lt;/body&gt;\n&lt;/note&gt;&#x27;
}

        headers = {
            'x-api-key': API_KEY,
            'Content-Type': 'application/json'
        }

        response = requests.post(API_URL, headers=headers, json=request_body)

        # Raise exception for HTTP errors
        response.raise_for_status()

        data = response.json()

        # Check API response status
        if data.get('status') == 'ok':
            print('✓ Success!')
            print('Response data:', json.dumps(data['data'], indent=2))
            return data['data']
        else:
            print('✗ API Error:', data.get('error', 'Unknown error'))
            return None

    except requests.exceptions.RequestException as e:
        print(f'✗ Request failed: {e}')
        return None

if __name__ == '__main__':
    print('📤 Calling XML to JSON API...\n')

    result = call_xmltojson_api()

    if result:
        print('\n📊 Final Result:')
        print(json.dumps(result, indent=2))
    else:
        print('\n✗ API call failed')
