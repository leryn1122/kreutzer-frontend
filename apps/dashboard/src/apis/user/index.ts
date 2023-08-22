import { httpClient, ContentTypeEnum } from "@kreutzer/httpclient";
import { HttpResult } from "@kreutzer/types";

export enum API {
  UserLogin = '/api/login',
  CurrentUser = '/api/getUserProfile'
}

export interface LoginParams {
  username: string,
  password: string,
}

export function userLogin(params: LoginParams): Promise<HttpResult<any>> {
  return httpClient.post(API.UserLogin, params, 
      {
        headers: {
          'Content-Type': ContentTypeEnum.FORM_DATA,
        },
      }
    );
}