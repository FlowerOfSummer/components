import { App, Plugin } from 'vue'
import TableFilter from './src/index.vue'
export const TableFilterPlugin: Plugin = {
  install(app: App) {
    app.component('YTableFilter', TableFilter)
  },
}

export {
  TableFilter,
}
