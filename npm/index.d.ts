declare module '@apiverve/xmltojson' {
  export interface xmltojsonOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface xmltojsonResponse {
    status: string;
    error: string | null;
    data: XMLtoJSONData;
    code?: number;
  }


  interface XMLtoJSONData {
      note: Note;
  }
  
  interface Note {
      children: Child[];
  }
  
  interface Child {
      to?:      Body;
      from?:    Body;
      heading?: Body;
      body?:    Body;
  }
  
  interface Body {
      content: string;
  }

  export default class xmltojsonWrapper {
    constructor(options: xmltojsonOptions);

    execute(callback: (error: any, data: xmltojsonResponse | null) => void): Promise<xmltojsonResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: xmltojsonResponse | null) => void): Promise<xmltojsonResponse>;
    execute(query?: Record<string, any>): Promise<xmltojsonResponse>;
  }
}
