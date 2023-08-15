import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { HttpMethod } from './http';
import { AbortedRequestQueue } from './abort';
import { HttpResult } from '@kreutzer/types';
import { deepClone } from '@kreutzer/utils';

export type RequestURL = string | URL;

export class HttpClient {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateHttpClientOptoins;
  private abortedRequests?: AbortedRequestQueue;

  constructor(options: CreateHttpClientOptoins) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  private createAxios(config: AxiosRequestConfig): void {
    this.axiosInstance = axios.create(config);
  }

  private getInstance(): AxiosInstance {
    return this.axiosInstance;
  }

  private setupInterceptors(): void {
    // TODO
  }

  private sendRequest<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    let _config: AxiosRequestConfig = deepClone(config);
    const { requestOptions } = this.options;
    const _options: RequestOptions = Object.assign({}, requestOptions, options);
    _config = _options;

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<HttpResult<T>>>(_config)
        .then((resp: AxiosResponse<HttpResult<T>>) => {
          resolve(resp as unknown as Promise<T>);
        })
        .catch((e: Error | AxiosError) => {
          if (axios.isAxiosError(e)) {
            // TODO:
          }
          reject(e);
        });
    });
  }

  get<T = any>(url: RequestURL, config?: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.sendRequest({ ...config, method: HttpMethod.GET }, options);
  }

  post<T = any>(url: RequestURL, config?: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.sendRequest({ ...config, method: HttpMethod.POST }, options);
  }

  put<T = any>(url: RequestURL, config?: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.sendRequest({ ...config, method: HttpMethod.PUT }, options);
  }

  delete<T = any>(url: RequestURL, config?: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.sendRequest({ ...config, method: HttpMethod.DELETE }, options);
  }

  public setHeader<T = any>(headers: T): void {
    Object.assign(this.axiosInstance.defaults.headers, headers);
  }

  public useInterceptos(config: InterceptorConfig): void {
    const {
      enableAbortRequest,
      interceptorRequest,
      interceptorRequestRejected,
      interceptorResponse,
      interceptorResponseRejected,
    } = config;

    this.axiosInstance.interceptors.request.use(
      // FIXIME
      // (config: AxiosRequestConfig) => {
      (config: any) => {
        if (enableAbortRequest) {
        }
        if (interceptorRequest) {
          return interceptorRequest(config);
        }
        return config;
      },
      (error: Error | AxiosError) => {
        if (interceptorRequestRejected) {
          return interceptorRequestRejected(error || 'Server internal error.');
        }
        return Promise.reject(error || 'Server internal error.');
      },
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        if (enableAbortRequest) {
        }
        if (interceptorResponse) {
          interceptorResponse(response);
        }
        return response;
      },
      (error: Error | AxiosError) => {
        if (interceptorResponseRejected) {
          return interceptorResponseRejected(error);
        }
        return Promise.reject(error);
      },
    );
  }
}

export interface CreateHttpClientOptoins extends AxiosRequestConfig {
  requestOptions: RequestOptions;
}

export interface RequestOptions {}

export interface InterceptorConfig
  extends Partial<{
    enableAbortRequest: boolean;
    interceptorRequest: <T = any>(config: AxiosRequestConfig<T>) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
    interceptorRequestRejected: (error: Error | AxiosError) => any;
    interceptorResponse: <T = any>(
      value: AxiosResponse<HttpResult<T>>,
    ) => AxiosResponse<any> | Promise<AxiosResponse<T>>;
    interceptorResponseRejected: (error: Error | AxiosError) => any;
  }> {}

