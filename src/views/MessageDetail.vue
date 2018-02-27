<template>
  <ul>
    <p>{{this.$route.params.id}}</p>
    <li>id: {{message.id}}</li>
    <li>title: {{message.title}}</li>
    <li>content: {{message.content}}</li>
  </ul>
</template>

<script>
  const allMessages =[
    {id:1, title:'message001', content:'message content 0001'},
    {id:3, title:'message003', content:'message content 0003'},
    {id:5, title:'message005', content:'message content 0005'}
  ]
  export default {
    data(){
      return{
        message:{}
      }
    },
    mounted(){
      const id = this.$route.params.id*1
      this.showUI(id)
    },
    watch:{
      $route:function (newValue) {
        const id = newValue.params.id*1
        this.showUI(id)
      }
    },
    methods:{
      showUI (id){
        const message = allMessages.find(m => m.id===id)
        this.message = message
      }
    }
  }
</script>

<style scoped>

</style>
