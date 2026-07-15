/*
 * XML to JSON API - Basic Usage Example
 *
 * This example demonstrates the basic usage of the XML to JSON API.
 * API Documentation: https://docs.apiverve.com/ref/xmltojson
 */

using System;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using System.Linq;

namespace APIVerve.Examples
{
    class XMLtoJSONExample
    {
        private static readonly string API_KEY = Environment.GetEnvironmentVariable("APIVERVE_API_KEY") ?? "YOUR_API_KEY_HERE";
        private static readonly string API_URL = "https://api.apiverve.com/v1/xmltojson";

        /// <summary>
        /// Make a POST request to the XML to JSON API
        /// </summary>
        static async Task<JsonDocument> CallXMLtoJSONAPI()
        {
            try
            {
                using var client = new HttpClient();
                client.DefaultRequestHeaders.Add("x-api-key", API_KEY);

                // Request body
                var requestBody &#x3D; new { xml &#x3D; &quot;&lt;?xml version&#x3D;&quot;1.0&quot; encoding&#x3D;&quot;UTF-8&quot;?&gt;
&lt;note&gt;
  &lt;to&gt;Tove&lt;/to&gt;
  &lt;from&gt;Jani&lt;/from&gt;
  &lt;heading&gt;Reminder&lt;/heading&gt;
  &lt;body&gt;Don&#x27;t forget me this weekend!&lt;/body&gt;
&lt;/note&gt;&quot; };

                var jsonContent = JsonSerializer.Serialize(requestBody);
                var content = new StringContent(jsonContent, Encoding.UTF8, "application/json");

                var response = await client.PostAsync(API_URL, content);

                // Check if response is successful
                response.EnsureSuccessStatusCode();

                var responseBody = await response.Content.ReadAsStringAsync();
                var data = JsonDocument.Parse(responseBody);

                // Check API response status
                if (data.RootElement.GetProperty("status").GetString() == "ok")
                {
                    Console.WriteLine("✓ Success!");
                    Console.WriteLine("Response data: " + data.RootElement.GetProperty("data"));
                    return data;
                }
                else
                {
                    var error = data.RootElement.TryGetProperty("error", out var errorProp)
                        ? errorProp.GetString()
                        : "Unknown error";
                    Console.WriteLine($"✗ API Error: {error}");
                    return null;
                }
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"✗ Request failed: {e.Message}");
                return null;
            }
        }

        static async Task Main(string[] args)
        {
            Console.WriteLine("📤 Calling XML to JSON API...\n");

            var result = await CallXMLtoJSONAPI();

            if (result != null)
            {
                Console.WriteLine("\n📊 Final Result:");
                Console.WriteLine(result.RootElement.GetProperty("data"));
            }
            else
            {
                Console.WriteLine("\n✗ API call failed");
            }
        }
    }
}
