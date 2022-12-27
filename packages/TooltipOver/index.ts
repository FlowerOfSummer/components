import { App, Plugin } from 'vue';
import TooltipOver from './src/index.vue';

export const TooltipOverPlugin: Plugin = {
  install(app: App) {
    app.component('y-tooltip-over', TooltipOver);
  },
};

export {
  TooltipOver,
};
