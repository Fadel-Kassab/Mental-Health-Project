interface AxiosErrorData {
    message: string;
    // add more properties here if needed
  }
  
  interface AxiosErrorConfig {
    // structure of Axios config object here
  }
  
  interface AxiosErrorHeaders {
    [key: string]: string;
  }
  
  interface AxiosError {
    response?: {
      data?: AxiosErrorData;
      status?: number;
      statusText?: string;
      headers?: AxiosErrorHeaders;
      config?: AxiosErrorConfig;
    };
    // You can add more properties if needed
  }
  
  export class AxiosErrorModel {
    message: string;
    status: number | null;
    statusText: string | null;
    headers: AxiosErrorHeaders;
    config: AxiosErrorConfig;
  
    constructor(error: AxiosError) {
      this.message = error.response?.data?.message || 'Unknown error';
      this.status = error.response?.status || null;
      this.statusText = error.response?.statusText || null;
      this.headers = error.response?.headers || {};
      this.config = error.response?.config || {};
    }
  }
  
