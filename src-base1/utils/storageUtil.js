export default {
  readComments(){
    return JSON.parse(window.localStorage.getItem('comm_key') || '[]')
  },
  saveComments(comments){
    window.localStorage.setItem('comm_key',JSON.stringify(comments))
  }
}
