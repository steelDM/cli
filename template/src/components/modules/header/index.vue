<style scoped>
	.header{
		width:100%;
		height:70px;
		background:#393b46;
	}
	.header .logo{
		display: inline-block;
	    width: 155px;
	    height: 50px;
	    font-size: 24px;
	    color: #fff;
	    /*background: url(../../../resource/img/logo.png) 0 0 no-repeat;*/
	}
	.header .logo-box{
		float:left;
		margin: 13px 0 0 29px;
	}
	.header ul {
	    float: left;
	    display: inline;
	    height: 66px;
		line-height:66px;
		font-size:18px;
	    list-style: none;
		margin-left:25px;
	}
	.header ul li {
	    float: left;
		text-align: center;
	    display: inline;
	    padding: 0 5px;
	}
	.header ul li.active{
		border-bottom:solid 4px #28bd8b;
	}
	.header ul li a {
	    text-decoration: none;
	    color: #ffffff;
	}
	.header .user-info{
		float: right;
		height: 70px;
		line-height:70px;
		margin-right:25px;
		font-size: 14px;
	}
	.header .user-info a,
	.header .user-info span{
		color:#fff;
		text-decoration: none;
	}
	.header .user-info .btn-link{
		color:#0ca8f5;
		line-height: 60px;
		text-decoration: none;
	}
	.header .user-info .username{
	    display: inline-block;
	    color: #fff;	
	}
</style>

<template>
	<div class="header">
		<div class="logo-box">
			<a class="logo">项目logo</a>
		</div>
		<ul>
			<li v-for="menu in menus" :class="{active:curView.startsWith(menu.curView)}">
				<router-link :to="menu.url">{{menu.name}}</router-link>
			</li>
		</ul>
		<form method="post">            
			<div class="user-info">
				<span>{{userInfo.userName}}</span>
				<span>|</span> <a :href="logoutUrl" class="btn-link">退出</a>
			</div>        
		</form>
	</div>	
</template>

<script>
	import router from '@router/index';
	import store from '@vuex/index';
	export default {

		props:['menus','logoutUrl'],
		computed:{
			userInfo:()=> store.state.mutations.info		
		},
		data:function(){
			return {
				curView:location.hash.replace('#','').split('?')[0]
			}
		},
	    mounted: function () {
	    	var self = this;
	   
			router.beforeEach(function (to, from, next) {
				self.curView = to.path;
			    next()
			});
	    }        
	}
</script>