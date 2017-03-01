import Vue from 'vue';
import VueRouter from 'vue-router';
import VueValidator from 'vue-validator';
import Vuex from 'vuex';

import App from './index.vue';
import store from '@vuex/index';
import routes from '@router/index';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes
});

new Vue({
    el:'#app',
    store,
    router,
    render: h => h(App)
});



