declare module '@apiverve/xmltojson' {
  export interface xmltojsonOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface xmltojsonResponse {
    status: string;
    error: string | null;
    data: XMLtoJSONData;
    code?: number;
    premium?: PremiumInfo;
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
      content: null | string;
  }

  export default class xmltojsonWrapper {
    constructor(options: xmltojsonOptions);

    execute(callback: (error: any, data: xmltojsonResponse | null) => void): Promise<xmltojsonResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: xmltojsonResponse | null) => void): Promise<xmltojsonResponse>;
    execute(query?: Record<string, any>): Promise<xmltojsonResponse>;
  }
}
