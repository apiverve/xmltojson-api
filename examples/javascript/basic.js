/**
 * XML to JSON API - Basic Usage Example
 *
 * This example demonstrates the basic usage of the XML to JSON API.
 * API Documentation: https://docs.apiverve.com/ref/xmltojson
 */

const API_KEY = process.env.APIVERVE_API_KEY || 'YOUR_API_KEY_HERE';
const API_URL = 'https://api.apiverve.com/v1/xmltojson';

/**
 * Make a POST request to the XML to JSON API
 */
async function callXMLtoJSONAPI() {
  try {
    // Request body
    const requestBody &#x3D; {
    &quot;xml&quot;: &quot;&lt;?xml version&#x3D;\&quot;1.0\&quot; encoding&#x3D;\&quot;UTF-8\&quot;?&gt;\n&lt;note&gt;\n  &lt;to&gt;Tove&lt;/to&gt;\n  &lt;from&gt;Jani&lt;/from&gt;\n  &lt;heading&gt;Reminder&lt;/heading&gt;\n  &lt;body&gt;Don&#x27;t forget me this weekend!&lt;/body&gt;\n&lt;/note&gt;&quot;
};

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check API response status
    if (data.status === 'ok') {
      console.log('✓ Success!');
      console.log('Response data:', data.data);
      return data.data;
    } else {
      console.error('✗ API Error:', data.error || 'Unknown error');
      return null;
    }

  } catch (error) {
    console.error('✗ Request failed:', error.message);
    return null;
  }
}

// Run the example
callXMLtoJSONAPI()
  .then(result => {
    if (result) {
      console.log('\n📊 Final Result:');
      console.log(JSON.stringify(result, null, 2));
    }
  });
