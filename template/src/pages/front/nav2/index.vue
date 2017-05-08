<template>
	<div class="main-container ">
		<p>type1</p>
	</div>
</template>

<script>
	export default {
	    data : function(){
	    	return {

	    	}
	    },
	    components: {

	    },
	    mounted: function () {
	      this.$nextTick(function () {
	        this.init();
	      })
	    },                              
	    methods : {
	        init:function(){
	        	
	        }
	    }
	}
</script>

<style scoped>
	#content{
		display: flex;
	}
</style>
<template>
	<div>
		<div id="content" class="clearfix">
			<div class="main-container ">
				<p>nav2</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
	    	return {
	    	}
		}
	}
</script>