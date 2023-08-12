export function createStorageKeyPrefix(env: Record<string, any>) {
  const { VITE_GLOB_APP_SHORT_NAME } = getAppConfig(env);
  return `${VITE_GLOB_APP_SHORT_NAME}_${env.MODE}`.toUpperCase();
}

export function createStorageName(env: Record<string, any>) {
  return `${createStorageKeyPrefix(env)}`.toUpperCase();
}
