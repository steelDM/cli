import Vue from 'vue'
import Router from 'vue-router'

import notfound from '@pages/error/404.vue'
import forbiden from '@pages/error/403.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/forbiden',
            component:forbiden
        },
        {
            path:'/notfound',
            component:notfound
        },
        {
            path:'*',
            redirect:'/notfound'
        }
    ]
})
