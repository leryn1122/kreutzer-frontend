import { GlobEnvConfig } from '@kreutzer/types';

export function getAppConfigFileName(env: Record<string, any>) {
  return `__PRODUCTION__${env.VITE_GLOB_APP_SHORT_NAME || '__APP'}__CONF__`.toUpperCase().replace(/\s/g, '');
}

export function getAppConfig(env: Record<string, any>) {
  const ENV_NAME = getAppConfigFileName(env);

  // const ENV = (
  //   env.DEV ? env : window[ENV_NAME]
  // ) as GlobEnvConfig;

  const ENV = env.DEV as GlobEnvConfig;

  const { VITE_GLOB_APP_SHORT_NAME } = ENV;

  if (!/^[a-zA-Z\_]*$/.test(VITE_GLOB_APP_SHORT_NAME)) {
    console.warn(
      `VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.`,
    );
  }

  return env;
}
