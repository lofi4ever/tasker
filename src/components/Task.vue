<template>
  <div class="task"
    :class="[{editing: isEditing}, {waiting: task.isWaiting}]"
    @click="edit">
    <form action="" @submit.prevent="save" v-show="isEditing">
      <div class="task-name">
        <input type="text" v-model="task.name">
      </div>
      <div class="task-text">
        <textarea v-model="task.text"></textarea>
      </div>
      <input type="submit" value="save">
    </form>
    <div v-show="isReady">
      <div class="task-name">
        <h3>{{task.name}}</h3>
      </div>
      <div class="task-text">
        <p>{{task.text}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .task {
    &.editing {
      border-color: purple;
    }
    &.waiting {
      opacity: .7;
    }
    &-name {
      h3, input {
        color: $c-accent-2;
        margin-top: 0;
        font-weight: 700;
        font-size: 22px;
        margin-bottom: 22px;
        display: block;
        width: 100%;
      }
    }
    &-text {
      p, textarea {
        font-size: 16px;
        line-height: normal;
        margin: 12px 0;
      }
      textarea {
        width: 100%;
        height: 200px;
        resize: none;
      }
    }
  }
  .task {
    background-color: #fff;
    border: 1px solid $c-green;
    border-radius: 8px;
    padding: 14px;
  }
</style>

<script>
	export default {
		name: 'Task',
    props: ['task'],
    data() {
      return {
        isEditing: false,
        isWaiting: false
      }
    },
    computed: {
      isReady: function() {
        return !this.isEditing
      }
    },
    methods: {
      edit: function() {
        this.isEditing = true;
      },
      save: function() {
        this.$emit('save');
        this.isEditing = false
      }
    },
		created() {
      //
		}
	}
</script>