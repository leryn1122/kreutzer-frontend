import { httpClient } from '@kreutzer/httpclient';

enum API {
  Env = '/api/helm/env',
  ListRepos = '/api/helm/repo/list',
}

export function getHelmEnv(): Promise<any> {
  return httpClient.get(API.Env);
}

export function listRepos(): Promise<Repos> {
  return httpClient.get(API.ListRepos);
}

export type Repos = Array<{
  name: string;
  url: string;
  lastSyncTime: string;
}>;
