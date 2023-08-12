export enum MenuType {
  SIDEBAR = 'sidebar',
  TOP_MENU_MIXED = 'top-menu-mixed',
}

export function getMenuType(): MenuType {
  return MenuType.TOP_MENU_MIXED;
}
