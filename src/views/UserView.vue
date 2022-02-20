<template>
  <h1>UserId: {{ $route.params.userId }}</h1>
  <div>Name: {{ userInfo.name }}</div>
  <div>Email: {{ userInfo.email }}</div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      userInfo:{}
    }
  },
  mounted(){
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.userId}`)
         .then(response => this.userInfo = response.data)
  }
}
</script>