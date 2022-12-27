/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { TableFilterPlugin } from './TableFilter';
import { TooltipOverPlugin } from './TooltipOver';

const MYKitPlugin: Plugin = {
  install(app: App) {
    TableFilterPlugin.install?.(app);
    TooltipOverPlugin.install?.(app);
  },
};

export default MYKitPlugin;

export * from './TableFilter'
export * from './TooltipOver'