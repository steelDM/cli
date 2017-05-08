var state = {
    info:{
        userId:'',
        baseUrl:'',
        userName:''
    }
};

var mutations = {
    'SETUSERINFO':function(state, data) {
        state.info = {
        	...state.info,
        	...data
        }
    }
};

export default {
	state,
	mutations
}

