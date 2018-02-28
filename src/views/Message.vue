<template>
  <div>
    <ul>
      <li v-for="(m, index) in messages" :key="index">
        <router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>
        <button @click="push(m.id)">push查看</button>
        <button @click="replace(m.id)">replace查看</button>
      </li>

    </ul>

    <hr>
    <router-view></router-view>
    <button @click="handleReturn">返回</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        messages:[]
      }
    },
    methods:{
      push(id){
        this.$router.push(`/home/message/detail/${id}`)
      },
      replace(id){
        this.$router.replace(`/home/message/detail/${id}`)
      },
      handleReturn(){
        this.$router.back()
      }
    },
    mounted(){
      setTimeout(() =>{
        this.messages=[
          {id:1, title:'message001'},
          {id:3, title:'message003'},
          {id:5, title:'message005'},
        ]
      },1000)
    }
  }
</script>

<style scoped>

</style>
