/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { TestPlugin } from './Test';
import { TableFilterPlugin } from './TableFilter';
import { FilterPlugin } from './Filter';

const MYKitPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    TestPlugin.install?.(app);
    TableFilterPlugin.install?.(app);
    FilterPlugin.install?.(app);
  },
};

export default MYKitPlugin;

export * from './Button'
export * from './Test'
export * from './TableFilter'
export * from './Filter'