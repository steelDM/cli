import notfound from '@pages/error/404.vue'
import forbiden from '@pages/error/403.vue'

export default [
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
];