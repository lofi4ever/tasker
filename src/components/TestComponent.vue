<template>
  <div class="wrapper">
    <h2>{{name}} <span>here we use SCSS</span></h2>
    <p>{{message}}</p>
  </div>
</template>

<style scoped lang="scss">
  h2 {
    color: blue;
    span {
      text-transform: uppercase;
    }
  }
</style>

<script>
  export default {
    name: "TestComponent",
    props: ['message'],
    // data() {
    //   name: "Test component"
    // }
    data: () => {
      return {
        name: 'test'
      }
    }
  }
</script>