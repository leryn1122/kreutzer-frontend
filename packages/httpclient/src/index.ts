import _ from 'lodash';
import { CreateAxiosDefaults } from 'axios';

import { CreateHttpClientOptoins, HttpClient } from './axios';
import { ContentTypeEnum } from './http';

export function createHttpClient(options?: Partial<CreateHttpClientOptoins>) {
  let opt: CreateHttpClientOptoins = _.merge(
    {
      timeout: 10 * 1000,
      headers: {
        'Content-Type': ContentTypeEnum.JSON,
      },
      requestOptions: {
        formatDate: true,
        withToken: true,
      },
    } as CreateAxiosDefaults,
    options || {},
  );
  return new HttpClient(opt);
}

export const httpClient = createHttpClient();
