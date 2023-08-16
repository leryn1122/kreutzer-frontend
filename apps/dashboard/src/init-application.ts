import { ContextOptions as LayoutContextOptions, useContext as useLayoutContext } from '@kreutzer/layouts';
import { ContextOptions as HttpContextOptions, useContext as useHttpContext } from '@kreutzer/httpclient';
import { getMenus } from '@/router';
import { useDesign } from '@/hooks/hooks';
import { useUserStore } from '@/store/user';

async function initPackages() {
  const initLayoutContext = async () => {
    await useLayoutContext(() => {
      return {
        useDesign,
        useUserStore,
        getMenus,
      } as LayoutContextOptions;
    });
  };

  const initHttpContext = async () => {
    await useHttpContext(() => {
      return {
        apiUrl: 'http://localhost:5173',
      } as HttpContextOptions;
    });
  };

  await Promise.all([initLayoutContext(), initHttpContext()]);
}

function initAppConfigStore() {}

export async function initApplication() {
  await initPackages();

  initAppConfigStore();
}
