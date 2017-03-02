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

    export default {
        components: {
            navMenu
        },
        data() {
            return {
            };
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
