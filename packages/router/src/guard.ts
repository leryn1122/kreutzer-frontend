import { NavigationGuardWithThis, RouteLocationNormalized, Router, routeLocationKey } from 'vue-router';

export interface RecordableNavigationGuard {
  readonly id: string | Symbol;
  guardWith(route: Router): void;
}

export class NavigationGuardChain {
  private guards: Array<RecordableNavigationGuard> = [];

  constructor() {}

  addGuard(guard: RecordableNavigationGuard): NavigationGuardChain {
    this.guards.push(guard);
    return this;
  }

  register(router: Router) {
    this.guards.forEach((g) => {
      g.guardWith(router);
    });
  }
}

export function setupNavigationGuardChain(): NavigationGuardChain {
  return new NavigationGuardChain()
    .addGuard(createBasicGuard())
    .addGuard(createPageGuard())
    .addGuard(createPageLoadingGuard())
    .addGuard(createHttpGuard())
    .addGuard(createScrollGuard())
    .addGuard(createMessageGuard())
    .addGuard(createProgressGuard())
    .addGuard(createPermissionGuard())
    .addGuard(createParamMenuGuard())
    .addGuard(createStateGuard());
}

export function createBasicGuard(): RecordableNavigationGuard {
  return {
    id: 'BasicGuard',
    guardWith(router) {
      router.beforeEach((to) => {
        if (to.meta.title) {
          document.title = to.meta.title as string;
        }
        return true;
      });
    },
  };
}

export function createPageGuard(): RecordableNavigationGuard {
  return {
    id: 'PageGuard',
    guardWith(router) {
      const loadedPageMap = new Map<string, boolean>();
      router.beforeEach(async (to) => {
        to.meta.loaded = !!loadedPageMap.get(to.path);
        setRouteChange(to);
        return true;
      });

      router.afterEach((to) => {
        loadedPageMap.set(to.path, true);
      });
    },
  };
}

//
export function createPageLoadingGuard(): RecordableNavigationGuard {
  return {
    id: 'PageLoadingGuard',
    guardWith(router) {},
  };
}

//
export function createHttpGuard(): RecordableNavigationGuard {
  return {
    id: 'HttpGuard',
    guardWith(router) {},
  };
}

//
export function createScrollGuard(): RecordableNavigationGuard {
  return {
    id: '',
    guardWith(router) {
      const isHash = (href: string) => {
        return /^#/.test(href);
      };

      const body = document.body;
      router.afterEach(async (to) => {
        isHash((to as RouteLocationNormalized & { href: string })?.href) && body.scroll(0, 0);
        return true;
      });
    },
  };
}

//
export function createMessageGuard(): RecordableNavigationGuard {
  return {
    id: '',
    guardWith(router) {},
  };
}

//
export function createProgressGuard(): RecordableNavigationGuard {
  return {
    id: '',
    guardWith(router) {},
  };
}

//
export function createPermissionGuard(): RecordableNavigationGuard {
  return {
    id: '',
    guardWith(router) {},
  };
}
//
export function createParamMenuGuard(): RecordableNavigationGuard {
  return {
    id: '',
    guardWith(router) {},
  };
}

//
export function createStateGuard(): RecordableNavigationGuard {
  return {
    id: '',
    guardWith(router) {},
  };
}

function setRouteChange(to: RouteLocationNormalized) {
  // throw new Error('Function not implemented.');
}
