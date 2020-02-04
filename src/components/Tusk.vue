<template>
<div class="tusk">
	<h3>{{name}}</h3>
	<p>{{text}}</p>
</div>
</template>

<style scoped lang="scss">
h3 {
	color: $c-accent-2;
}
.tusk {
	background-color: #fff;
	border: 1px solid $c-green;
	border-radius: 8px;
	padding: 14px;
}
</style>

<script>
	export default {
		name: 'Tusk',
		props: ['name', 'text'],
		created() {
			console.log('Tusk component is created');
		}
	}
</script>