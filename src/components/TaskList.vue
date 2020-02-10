<template>
  <div class="task-wrapper">
    <Task v-for="(task, index) in taskList" :task="task" :key="index" @save="updateTask(index)"></Task>
    <Task :task="newTask" key="unique" @save="saveTask"></Task>
  </div>
</template>

<style lang="scss" scoped>
  .task-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: -15px;
    margin-right: -15px;
    .task {
      width: calc(25% - 30px);
      margin: 15px;
      box-sizing: border-box;
    }
  }
</style>

<script>
  import Task from './Task';
  export default {
    name: 'TaskList',
    components: {
      Task
    },
    data() {
      return {
        newTask: {
          name: 'New task',
          text: '',
          isWaiting: false
        },
        taskList: []
      }
    },
		created() {
			fetch('/api/tasks/')
				.then(response => {
					return response.json();
				})
				.then(data => {
					this.taskList = data;
				});
		},
    methods: {
      updateTask: function(index) {
        this.taskList[index].isWaiting = true;
        setTimeout(() => {
            
          this.taskList[index].isWaiting = false;
        }, 1000);
      },
      saveTask: function() {
        this.newTask.isWaiting = true;
				

        setTimeout(() => {
          this.taskList.push({
            name: this.newTask.name,
            text: this.newTask.text
          });
          this.newTask.name = "New task";
          this.newTask.text = "";
          this.newTask.isWaiting = false;
        }, 1000);
      }
    }
  }
</script>