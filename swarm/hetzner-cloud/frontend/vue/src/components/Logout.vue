<template>
  <span>
    <router-link to="/blog">Mein Blog</router-link>
    <button v-on:click="logout">Logout</button>
  </span>
</template>
<script>
import request from '../util/request'
export default {
  name: 'logout',
  methods: {
    logout: function () {
      request.post('/logout')
        .then(json => {
          console.log('response: ', json)
          this.$store.commit('logout')
          this.$router.push('/')
        })
    }
  }
}
</script>
<style scoped>
a {
  color: white;
  text-decoration: none;
}
.router-link-active {
  display: none;
}
</style>
