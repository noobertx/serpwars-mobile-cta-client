<template>
	<div class="nav-bar-wrap">
		<!-- <nav class="nav-extended" id="app-nav"> -->
		<div class="nav-content">
			<ul class="tabs">
				<slot></slot>
				<li class="tab"><a href="#test1">Test 1</a></li>
				<li class="tab"><a href="#test2">Test 2</a></li>
				<li class="tab"><a href="#test3">Disabled Tab</a></li>
				<li class="tab"><a href="#test4">Test 4</a></li>
			</ul>
		</div>
		<!-- </nav>			 -->
		<div id="create" class="col s12 active">Create Element</div>
		<div id="test1" class="col s12">Test 1</div>
		<div id="test2" class="col s12">Test 2</div>
		<div id="test3" class="col s12">Test 3</div>
		<div id="test4" class="col s12">Test 4</div>
	</div>
</template>
<script>
	export default{
		name : "MobileElements",
		data(){
			return {}
		},
		mounted(){
			document.addEventListener('DOMContentLoaded', function(M) {
			// var elems = document.querySelectorAll('.sidenav');
			// var instances = M.Sidenav.init(elems, {});
			var el = document.querySelectorAll('.tabs');
			// var instance = M.Tabs.init(el, {});
			M.Tabs.init(el, {});
		});

			// $(document).ready(function(){
			// 	$('.sidenav').sidenav();
   //  			$('.tabs').tabs();


		}

	}
</script>
<style>
.nav-bar-wrap {
	position: fixed;
	width: 1050px;
	top: 0;
}

#app-nav{
	background: #47a3da;
}
.nav-content .tabs{
	background: #47a3da;		
}
</style>