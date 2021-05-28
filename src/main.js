import Vue from 'vue'
import App from './App.vue'

//importo il FlagIcon scaricato con l'npm
import FlagIcon from 'vue-flag-icon'
Vue.use(FlagIcon);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
