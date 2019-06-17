import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      todos:
      [
        { task: 'washing up', priority: 'high' },
        { task: 'laundry', priority: 'low' },
        { task: 'walk the dog', priority: 'low' },
        { task: 'homework', priority: 'low' }
      ],
      newTodo: "",
      priority: "high"
    },
    methods: {
      saveNewToDo: function() {
        console.dir(this.priority);
        console.log(this.newTodo);
        this.todos.push({
          task: this.newTodo,
          priority: this.priority
        });
        this.newTodo = "";
        this.priority = "high";
      }
    }
  })
})
