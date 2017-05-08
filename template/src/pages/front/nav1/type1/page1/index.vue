<template>
	<div class="main-container ">
		<p>page1</p>
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