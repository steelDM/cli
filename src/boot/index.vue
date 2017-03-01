<template>
    <div>
        <nav-menu></nav-menu>
        <transition name="slide-fade">
            <div id="content">
                <router-view></router-view>
            </div>
        </transition>
    </div>
</template>

<script>
    
    import navMenu from '@components/header.vue';
    import { mapState } from 'vuex'

    export default {
        components: {
            navMenu
        },
        data() {
            return {
            };
        },
        computed: {
            // ...mapState({
            //     //vuex映射数据
            // })
        },
        mounted () {
          this.$nextTick(function () {
            this.init();
          })
        },
        methods:{
            init(){

            }
        }                       
    }
</script>
