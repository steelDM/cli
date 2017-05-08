import Vue from 'vue'
import Router from 'vue-router'

import notfound from '@pages/error/404.vue'
import forbiden from '@pages/error/403.vue'

import nav1 from '@pages/front/nav1/nav.vue';
import nav1Type1 from  '@pages/front/nav1/type1/nav.vue';
import nav1Type1Page1 from  '@pages/front/nav1/type1/page1/index.vue';
import nav1Type1Page2 from  '@pages/front/nav1/type1/page2/index.vue';
import nav1Type2 from  '@pages/front/nav1/type2/index.vue';
import nav2 from  '@pages/front/nav2/index.vue';

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/nav1',
            component:nav1,
            children:[
                {
                    path:'type1',
                    component:nav1Type1,
                    children:[
                        {
                            path:'page1',
                            component:nav1Type1Page1
                        },
                        {
                            path:'page2',
                            component:nav1Type1Page2
                        },
                        {
                            path:'',
                            component:nav1Type1Page1
                        }   
                    ]                
                },
                {
                    path:'type2',
                    component:nav1Type2                 
                },
                {
                    path:'',
                    component: nav1Type1
                }
            ]
        },
        {
            path:'/nav2',
            component:nav2
        },
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
});