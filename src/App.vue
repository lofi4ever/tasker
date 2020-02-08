<template>
  <div id="app">
    <div class="app-content">
      <TestComponent :message="msg"/>
      <div class="task-wrapper">
        <Task v-for="(task, index) in taskList" :task="task" :key="index" @save="saveTask(index)"></Task>
        <Task :task="newTask" key="unique" @save="saveTask(null)"></Task>
      </div>
    </div>
  </div>
</template>

<script>
import TestComponent from './components/TestComponent.vue';
import Task from './components/Task.vue';

export default {
  name: 'app',
  components: {
    TestComponent,
		Task
  },
  methods: {
    saveTask: function(index) {
      if(index === null) {
        this.taskList.push({
          name: this.newTask.name,
          text: this.newTask.text
        });
        this.newTask.name = "New task";
        this.newTask.text = "";
      }
      console.log(`task ${index} is saved`);
    }
  },
	data() {
		return {
      msg: 'and another message!',
      newTask: {
        name: "New Task",
        text: ""
      },
			taskList: [
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
.task-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: -15px;
  margin-right: -15px;
  .task {
    width: 25%;
    margin: 15px;
    box-sizing: border-box;
  }
}
</style>
