import type { ProxyOptions } from 'vite';

type ProxyItem = [string, string];
type ProxyList = ProxyItem[];
type ProxyTargetList = Record<string, ProxyOptions>;

const httpsReg = /^https:\/\//;

export function createProxy(list: ProxyList = []) {
  const result: ProxyTargetList = {};
  for (const [apiPrefix, target] of list) {
    const isHttps = httpsReg.test(target);
    result[apiPrefix] = {
      target: target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${apiPrefix}`), ''),
      ...(isHttps ? { secure: false } : {}),
    };
  }
  return result;
}
