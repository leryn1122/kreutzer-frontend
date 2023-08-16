export function useDesign(scope: string) {
  return {
    prefixCls: `kreutzer-${scope}`,
    prefixVar: `kreutzer`,
  };
}
