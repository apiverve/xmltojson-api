using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.XMLtoJSON
{
    /// <summary>
    /// Query options for the XML to JSON API
    /// </summary>
    public class XMLtoJSONQueryOptions
    {
        /// <summary>
        /// The XML content to convert to JSON
        /// </summary>
        [JsonProperty("xml")]
        public string Xml { get; set; }
    }
}
