import { ContextOptions, initLayout } from '@kreutzer/layouts';
import { getMenus } from '@kreutzer/router';


async function initPackages() {
  const initLayout_ = async () => {
    await initLayout(() => {
      return {

        getMenus,

      } as ContextOptions;
    });
  };
  await Promise.all([initLayout_()]);
}

function initAppConfigStore() { }

export async function initApplication() {
  await initPackages();



  initAppConfigStore();
}
