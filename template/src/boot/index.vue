<style>
    .width-200{
        width: 200px;
    }   
    .table{
        overflow: auto;
        min-width: 986px;
    }
    table .thop{
        min-width: 120px;
    }
    table th{
        white-space: nowrap;
    }   
</style>

<template>
    <div>
        <headers :user-info="userInfo" :menus="menus"></headers>
        <div class="wrapper-content">
            <transition>
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import store from '@vuex/index';
    import headers from '@components/modules/header/index.vue';

    export default {
        components: {
            headers
        },
        computed:{
            userInfo:()=> store.state.mutations.info
        },
        data() {
            return {
                menus:[
                    {'name':'导航1','url':'/nav1/type1/page1','curView':'/nav1'},
                    {'name':'导航2','url':'/nav2','curView':'/nav2'}
                ]
            };
        }
    }
</script>