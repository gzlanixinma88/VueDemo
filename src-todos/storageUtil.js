

export default {
  readTodos(){

    return JSON.parse(window.localStorage.getItem('todo_key') || '[]')
  },
  saveTodos(todos){
    window.localStorage.setItem('todo_key', JSON.stringify(todos))
  }
}
