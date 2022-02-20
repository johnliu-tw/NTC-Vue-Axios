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
  computed:{
    userId(){
      return this.$route.params.userId
    }
  },
  watch:{
    userId: function(val){
      this.fetchUserInfo(val)
    }
  },
  mounted(){
    this.fetchUserInfo(this.userId)
  },
  methods:{
    fetchUserInfo(id){
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
           .then(response => this.userInfo = response.data)
    }
  }
}
</script>