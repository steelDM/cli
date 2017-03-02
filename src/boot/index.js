import Vue from 'vue';
import App from './index.vue';
import store from '@vuex/index';
import router from '@router/index';

new Vue({
    el:'#app',
    store,
    router,
    render: h => h(App)
});



