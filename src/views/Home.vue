<template>
  <div>
    <h2>Home route component</h2>
    <ul class="nav nav-tabs">
      <li><router-link to="/home/news">news</router-link></li>
      <li><router-link to="/home/message">Message</router-link></li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "about"
  }
</script>

<style scoped>

</style>
