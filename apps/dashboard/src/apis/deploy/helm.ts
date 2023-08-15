import { httpClient } from '@kreutzer/httpclient';

enum API {
  ENV = '/helm/env',
}

export function getHelmEnv() {
  httpClient.get(API.ENV);
}