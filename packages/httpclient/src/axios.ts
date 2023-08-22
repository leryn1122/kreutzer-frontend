import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import { HttpResult } from '@kreutzer/types';
import { deepClone } from '@kreutzer/utils';
import { ContentTypeEnum, HttpMethod } from './http';
import { AbortedRequestQueue } from './abort';

export type RequestURL = string;

export class HttpClient {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateHttpClientOptoins;
  private abortedRequests?: AbortedRequestQueue;

  constructor(options: CreateHttpClientOptoins) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  private getInstance(): AxiosInstance {
    return this.axiosInstance;
  }

  private setupInterceptors(): void {
    // TODO
  }

  private sendRequest<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<HttpResult<T>> {
    let _config: AxiosRequestConfig = deepClone(config);
    _config = Object.assign({}, _config, this.options, options) as AxiosRequestConfig;

    if (_config.headers?.['Content-Type'] === ContentTypeEnum.FORM_URLENCODED) {
      _config.data = qs.stringify(deepClone(_config.data)); 
    }

    return new Promise((resolve, reject) => {
      this.getInstance()
        .request<any, AxiosResponse<HttpResult<T>>>(_config)
        .then((resp: AxiosResponse<HttpResult<T>>) => {
          resolve(resp?.data as unknown as Promise<HttpResult<T>>);
        })
        .catch((e: Error | AxiosError) => {
          if (axios.isAxiosError(e)) {
            // TODO:
            console.error(e);
          }
          reject(e);
        });
    });
  }

  get<T = any>(url: RequestURL, config?: AxiosRequestConfig, options?: RequestOptions): Promise<HttpResult<T>> {
    return this.sendRequest(
      {
        ...config,
        url: url,
        method: HttpMethod.GET,
      },
      options,
    );
  }

  post<D = any, T = any>(url: RequestURL, data?: D, config?: AxiosRequestConfig, options?: RequestOptions): Promise<HttpResult<T>> {
    return this.sendRequest(
      {
        ...config,
        url: url,
        data: data,
        method: HttpMethod.POST,
      },
      options,
    );
  }

  put<D = any, T = any>(url: RequestURL, data?: D, config?: AxiosRequestConfig, options?: RequestOptions): Promise<HttpResult<T>> {
    return this.sendRequest(
      {
        ...config,
        url: url,
        data: data,
        method: HttpMethod.PUT,
      },
      options,
    );
  }

  delete<D = any, T = any>(url: RequestURL, data?: D, config?: AxiosRequestConfig, options?: RequestOptions): Promise<HttpResult<T>> {
    return this.sendRequest(
      {
        ...config,
        url: url,
        data: data,
        method: HttpMethod.DELETE,
      },
      options,
    );
  }

  public setHeader<T = any>(headers: T): void {
    Object.assign(this.getInstance().defaults.headers, headers);
  }

  public useInterceptos(config: InterceptorConfig): void {
    const {
      enableAbortRequest,
      interceptorRequest,
      interceptorRequestRejected,
      interceptorResponse,
      interceptorResponseRejected,
    } = config;

    this.getInstance().interceptors.request.use(
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

    this.getInstance().interceptors.response.use(
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
