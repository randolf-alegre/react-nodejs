'use client';
import Axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const API_URL = process.env.API_URL;
Axios.defaults.baseURL = API_URL;

export class HttpService {
  _axios = Axios.create();

  addRequestInterceptor = (onFulfilled: ((value: InternalAxiosRequestConfig<any>) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>) | null | undefined, onRejected: ((error: any) => any) | null | undefined) => {
    this._axios.interceptors.request.use(onFulfilled, onRejected);
  };

  addResponseInterceptor = (onFulfilled: ((value: AxiosResponse<any, any>) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>) | null | undefined, onRejected: ((error: any) => any) | null | undefined) => {
    this._axios.interceptors.response.use(onFulfilled, onRejected);
  };

  get = async (url: string) => await this.request(this.getOptionsConfig({ method: "get", url }));

  post = async (url:string, data: unknown) => await this.request(this.getOptionsConfig({ method: "post", url, data }));

  upload = async (url:string, data: unknown) => await this.request(this.getUploadOptionsConfig({ method: "post", url, data }));

  put = async (url: string, data: unknown) => await this.request(this.getOptionsConfig({ method: "put", url, data }));

  patch = async (url:string, data: unknown) => await this.request(this.getOptionsConfig({ method: "patch", url, data }));

  delete = async (url:string) => await this.request(this.getOptionsConfig({ method: "delete", url }));

  getOptionsConfig = (args: {method: string, url: string, data?: unknown }) => {
    const { method, url, data } = args;
    const headers = { "Content-Type": "application/json", "Accept": "application/json", 'Access-Control-Allow-Credentials': true }

    return {
      method,
      url,
      data,
      headers,
    };
  };

  getUploadOptionsConfig = (args: {method: string, url: string, data?: unknown }) => {
    const { method, url, data } = args;
    const headers = { "Content-Type": "multipart/form-data", 'Access-Control-Allow-Credentials': true }

    return {
      method,
      url,
      data,
      headers,
    };
  };

  request(options: AxiosRequestConfig<any>) {
    return new Promise((resolve, reject) => {
      this._axios
        .request(options)
        .then((res) => resolve(res.data))
        .catch((ex) => reject(ex.response.data));
    });
  }
}

export default new HttpService();
