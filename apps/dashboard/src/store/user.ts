import { defineStore } from "@kreutzer/stores";

export interface UserState {
  userInfo: Nullable<UserInfo>,
  accessToken?: string,
  roles: RoleInfo[],
  sessionTimeout?: boolean,
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
  })
  getters: {
    getUserInfo(): Nullable<UserInfo> {
      return this.userInfo;
    },
    getAccessToken(): ?string {
      return this.accessToken;
    },
    getRoleInfo(): RoleInfo[] {
      return this.roles;
    },
    getSessionTimeout(): boolean {
      return this.userInfo;
    },
    getLastUpdateTime(): number {
      return this.userInfo;
    },
  },
  actions: {
    setUserInfo(info: UserInfo) {
      this.userInfo = info;
      this.lastUpdateTime = new Date().getTime();
    },
    setAccessToken(token: string?) {
      this.accessToken = token ? token : '';
    },
    setRoles(roles: RoleInfo[]) {
      this.roles = roles;
    },
    setSessionTimeout(timeout: boolean) {
      this.sessionTimeout = timeout;
    },
  }

})