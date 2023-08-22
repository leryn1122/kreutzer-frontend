import { defineStore } from "@kreutzer/stores";
import { LoginParams, userLogin } from "@/apis/user";

export interface UserState {
  userInfo: Nullable<UserInfo>,
  accessToken?: string,
  roles: RoleInfo[],
  sessionTimeout: boolean,
  lastUpdateTime: number,
}

export interface UserInfo {

}

export interface RoleInfo {

}

export const useUserStore = defineStore('user-store', {
  persist: {
    paths: ['userInfo', 'accessToken', 'roles'],
  },
  state: (): UserState => ({
    userInfo: null,
    accessToken: undefined,
    roles: [],
    sessionTimeout: false,
    lastUpdateTime: 0,
  }),
  getters: {
    getUserInfo(): Nullable<UserInfo> {
      return this.userInfo;
    },
    getAccessToken(): string | undefined {
      return this.accessToken;
    },
    getRoleInfo(): RoleInfo[] {
      return this.roles;
    },
    getSessionTimeout(): boolean {
      return this.sessionTimeout;
    },
    getLastUpdateTime(): number {
      return this.lastUpdateTime;
    },
  },
  actions: {
    setUserInfo(info: UserInfo) {
      this.userInfo = info;
      this.lastUpdateTime = new Date().getTime();
    },
    setAccessToken(token: string | undefined) {
      this.accessToken = token ? token : '';
    },
    setRoles(roles: RoleInfo[]) {
      this.roles = roles;
    },
    setSessionTimeout(timeout: boolean) {
      this.sessionTimeout = timeout;
    },
    async login(params: LoginParams): Promise<Nullable<UserInfo>> {
      userLogin(params);

      return null;
    }
  },
})