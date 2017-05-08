<template>
	<div>
		<div id="content" class="clearfix">
			<div class="main-menu">
				<dl>
					<dd v-for="(item, index) in menus">
						<router-link :to="item.path">{{item.name}}</router-link>
						<ul>
							<li v-if="item.child.length>0" v-for="(r,index) in item.child">
								<router-link :to="r.path" style="padding-left:16px;border:none;">{{r.name}}</router-link>
							</li>
						</ul>
					</dd>				
				</dl>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
	    	return {
	    		menus:[
		    		{
		    			'path':'/nav1/type1',
		    			'name':'type1',
		    			'child':[
		    				{
				    			'path':'/nav1/type1/page1',
				    			'name':'page1'
		    				},
		    				{
				    			'path':'/nav1/type1/page2',
				    			'name':'page2'
		    				}
		    			]
		    		},
		    		{
		    			'path':'/nav1/type2',
		    			'name':'type2'
		    		}
	    		]
	    	}
		},
		beforeRouteUpdate (to, from, next) {
			if(to.path == '/nav1/type1'){
				next({path:'/nav1/type1/page1'});
			}else{
				next();
			}
		}
	}
</script>