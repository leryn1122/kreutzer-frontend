import type { RouteLocationNormalized, RouteRecordNormalized } from 'vue-router';

import { mitt } from '@kreutzer/utils';

const emitter = mitt();

const key = Symbol();

let lastChangeTab: RouteLocationNormalized;

function getRawRoute(route: RouteLocationNormalized): RouteLocationNormalized {
  if (!route) {
    return route;
  }
  const { matched, ...opt } = route;
  return {
    ...opt,
    matched: (matched
      ? matched.map((item) => ({
          meta: item.meta,
          name: item.name,
          path: item.path,
        }))
      : undefined) as RouteRecordNormalized[],
  };
}

export function setRouteChange(lastChangeRoute: RouteLocationNormalized) {
  const r = getRawRoute(lastChangeRoute);
  emitter.emit(key, r);
  lastChangeTab = r;
}
