import Vue from 'vue';
import App from './index.vue';
import filters from '@utils/filters';

import router from '@router/index';
import store from '@vuex/index';

//注册filter
filters && Object.keys(filters).forEach(function(key){
	Vue.filter(key,filters[key]);
});

// dao.getInitInfo().then(function(res){
	var res = {
		data:{
			userName:'用户名'
		},
		extend:{
			baseUrl:'/'
		}
	}

	store.commit('SETUSERINFO',res.data);
	store.commit('SETUSERINFO',res.extend);

	new Vue({
		el:'#app',
		router,
	    render: h => h(App)
	})

// });		
