<template>
  <div>
    <h2>第一个vue项目</h2>
    <img src="./assets/logo.png"/>
    <HelloWorld/>
  </div>
</template>
<script>
  import HelloWorld from './components/HelloWorld'
  export default {
    components:{
      HelloWorld
    }
  }
</script>
<style>
  img{
    width: 100px;
    height: 100px;
  }
</style>
