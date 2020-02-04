<template>
  <div id="app">
    <TestComponent :message="msg"/>
		<div class="tusk-wrapper">
			<Tusk v-for="(tusk, index) in tuskList" :name="tusk.name" :text="tusk.text" :key="index"></Tusk>
		</div>
  </div>
</template>

<script>
import TestComponent from './components/TestComponent.vue';
import Tusk from './components/Tusk.vue';

export default {
  name: 'app',
  components: {
    TestComponent,
		Tusk
  },
	data() {
		return {
			msg: 'and another message!',
			tuskList: [
				{
					name: 'Tusk 1',
					text: 'example'
				},
				{
					name: 'watch Jojo',
					text: 'currently i\'m on 5 season'
				},
				{
					name: 'whatever you could imagine',
					text: 'come on i thinl u have already got it'
				}
			]
		}
	}
}
</script>

<style lang="scss">
body {
  background-color: rgba($c-bg, .5);
}
#app {
  font-family: Verdana, sans-serif;
}
.tusk-wrapper {
	display: flex;
	justify-content: space-between;
}
</style>
