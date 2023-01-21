<template>
  <!-- Datei: mwa/frontend/vue/src/App.vue -->
  <div id="app">
    <header>
      <span>
        <router-link to="/">Online Foto-Tagebuch</router-link>
      </span>
      <logout v-if="loggedIn"></logout>
      <span v-else>
        <router-link to="/login">Login</router-link>
      </span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Logout from './components/Logout'
import request from './util/request'
export default {
  name: 'app',
  created () {
    request.get('/session')
      .then(resp => {
        if (resp.user) {
          this.$store.commit('login', resp.user)
        }
      })
  },
  computed: {
    loggedIn () { return this.$store.state.loggedIn },
    user () { return this.$store.state.user }
  },
  components: { Logout }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px;
  background-color: #35495E;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 20px;
    font-weight: 400;
    padding-top: 16px;
  }
}

</style>
<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
