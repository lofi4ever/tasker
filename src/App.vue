<template>
  <div id="app">
    <div class="app-content">
      <TestComponent :message="msg"/>
      <TaskList />
    </div>
  </div>
</template>

<script>
  import TestComponent from './components/TestComponent';
  import TaskList from './components/TaskList';

  export default {
    name: 'app',
    components: {
      TestComponent,
      TaskList
    },
    data() {
      return {
        msg: 'and another message!'
      }
    }
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  html, body {
    padding: 0;
    margin: 0;
  }
  body {
    background-color: rgba($c-bg, .5);
  }
  #app {
    font-family: Verdana, sans-serif;
  }
  .app-content {
    padding: 0 30px;
  }
</style>
