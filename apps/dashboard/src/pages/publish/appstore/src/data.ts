import { PrimaryTableCol, TableRowData } from "tdesign-vue-next";

export const columns: PrimaryTableCol<TableRowData>[] = [
  { colKey: 'name', title: 'Name', width: 50, fixed: 'left' },
  { colKey: 'url', title: 'URL', width: 100, fixed: 'left' },
  { colKey: 'state', title: 'State', width: 20, fixed: 'left' },
  { colKey: 'lastSyncTime', title: 'Last Sync Time', width: 50, fixed: 'right' },
  { colKey: 'operation', title: '', width: 10, fixed: 'right' },
];
