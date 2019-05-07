import Vue from 'vue'
import App from './App.vue'

Vue.filter('toUpperCase', (value) => {
  return value.toUpperCase();
});

Vue.mixin({
  created() {
    console.log('Global mixin')
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  created() {
    console.log('Global root');
  }
})
