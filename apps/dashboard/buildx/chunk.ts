import path from 'path';
import { PreRenderedAsset, PreRenderedChunk } from 'rollup';

function findNearestBusinessName(file: string) {
  const segments = file
    .split('.')[0]
    .split(path.sep)
    .reverse()
    .filter((e) => {
      return e != 'index' && e != 'src';
    });

  const name = segments.length > 0 ? segments[0].toLocaleLowerCase() : 'index';
  const ext = path.extname(file);

  return {
    name,
    ext,
  };
}

function doRenderFileNames(chunkInfo: PreRenderedAsset | PreRenderedChunk): string {
  // if (!chunkInfo.name) {
  //   return '';
  // }
  console.log('asset = ', chunkInfo.name);

  let { name, ext } = findNearestBusinessName(chunkInfo.name);
  if (!ext) {
    ext = 'js';
  } else if (/css|less|sass|scss/.test(ext)) {
    ext = 'css';
  } else if (/js|ts|jsx|tsx/.test(ext)) {
    ext = 'js';
  } else if (/vue_(vue_)+.*(type_style)+/.test(ext)) {
    // For those anonymous vue not refered by route.
    // Sample: `xxx.vue_vue_type_style_index_0_lang` from `xxx.vue?vue&type=style&index=0&lang=ts`
    ext = 'js';
  }
  return path.join('assets', `${name}-[hash:10].${ext}`);
}

export function renderAssetFileNames(chunkInfo: PreRenderedAsset): string {
  return doRenderFileNames(chunkInfo);
}

export function renderChunkFileNames(chunkInfo: PreRenderedChunk): string {
  return doRenderFileNames(chunkInfo);
}
