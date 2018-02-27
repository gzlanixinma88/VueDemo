<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoMain :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :selectAll="selectAll" :deleteComputed="deleteComputed"/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Main from './components/Main'
  import Footer from './components/Footer'
  import storageUtil from './storageUtil'
  export default {
    data () {
      return {
        // 从localStorage中读取保存todos数据
        todos:storageUtil.readTodos()

      }
    },
    methods: {
      // 添加todo
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo(index){
        this.todos.splice(index,1)
      },
      selectAll(check){
        this.todos.forEach(todo =>todo.completed = check)
      },
      deleteComputed(){
        this.todos = this.todos.filter(todo => !todo.completed)
      }
    },
    watch:{
      todos:{
        deep:true,
        handler:storageUtil.saveTodos
      }

    },
//v-bind : 向组建传递动态数据
    //所有的指令都是用来操作标签的
    components: {
      TodoHeader: Header,
      TodoMain: Main,
      TodoFooter: Footer
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
