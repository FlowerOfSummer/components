import { App, Plugin } from 'vue';
import Filter from './src/index.vue';

export const FilterPlugin: Plugin = {
  install(app: App) {
    app.component('m-filter', Filter);
  },
};

export {
  Filter,
};
