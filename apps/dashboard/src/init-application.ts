import { ContextOptions, useContext } from '@kreutzer/layouts';
import { getMenus } from '@/router';

async function initPackages() {
  const useContext_ = async () => {
    await useContext(() => {
      return {
        getMenus,
      } as ContextOptions;
    });
  };
  await Promise.all([useContext_()]);
}

function initAppConfigStore() {}

export async function initApplication() {
  await initPackages();

  initAppConfigStore();
}
