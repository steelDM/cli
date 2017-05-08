import Vuex from 'vuex';
import Vue from 'vue';
import mutations from '@vuex/mutations';

Vue.use(Vuex);

var store = new Vuex.Store({
    // 组合各个模块
    modules: {
        mutations
    }
});

export default store;