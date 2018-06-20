import Vue from 'vue'
import FlightPlan from './FlightPlan.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(FlightPlan)
}).$mount('#app')
