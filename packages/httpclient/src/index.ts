import { CreateAxiosDefaults } from 'axios';
import { deepMerge } from '@kreutzer/utils';

import { CreateHttpClientOptoins, HttpClient } from './axios';
import { ContentTypeEnum } from './http';
import { context } from '../context';


export function createHttpClient(options?: Partial<CreateHttpClientOptoins>): HttpClient {
  let opt: CreateHttpClientOptoins = deepMerge(
    {
      authenticationScheme: '',
      timeout: 10 * 1000,
      headers: {
        'Content-Type': ContentTypeEnum.JSON,
      },
      requestOptions: {
        apiUrl: () => context.apiUrl,
        errorMessageMode: 'message',
        formatDate: true,
        ignoreCancelToken: true,
        isReturnNativeResponse: false,
        isTransformResponse: true,
        joinTime: true,
        joinParamsToUrl: false,
        withToken: true,
      },
    } as CreateAxiosDefaults,
    options || {},
  );
  return new HttpClient(opt);
}

export const httpClient = createHttpClient();

export * from './http';
export default httpClient;