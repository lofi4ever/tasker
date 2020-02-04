<template>
  <div id="app">
    <TestComponent message="This is how you include custom component"/>
  </div>
</template>

<script>
import TestComponent from './components/TestComponent.vue'

export default {
  name: 'app',
  components: {
    TestComponent
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
</style>
