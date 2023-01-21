<template>
  <div class="loginbox" v-if="loggedIn === false">
    <form @submit.prevent="login">
      <label for="user">Benutzername</label>
      <input v-model="user" id="user" />
      <label for="password">Passwort</label>
      <input type="password" v-model="password" id="password" />
      <input type="submit" value="Anmelden" id="signin">
    </form>
    <div v-if="error">Benutzername oder Passwort falsch!</div>
  </div>
  <div v-else>
    <h2>Hi {{ username }}</h2>
    <p>Geh zu
      <router-link to="/blog">deinen Tagebucheinträgen</router-link>
    </p>
  </div>
</template>
<script>
import request from '../util/request'
export default {
  name: 'login',
  data () {
    return {
      user: '',
      password: '',
      error: false
    }
  },
  computed: {
    username () {
      return this.$store.state.user
    },
    loggedIn () {
      return this.$store.state.loggedIn
    }
  },
  methods: {
    login: function () {
      request.post('/login', {
        user: this.user,
        password: this.password
      })
        .then(json => {
          this.$router.push('blog')
          this.$store.commit('login', this.user)
          this.$emit('login', this.user)
        })
        .catch(err => {
          console.log('login failed: ', err)
          this.error = true
        })
    }
  }
}
</script>
<style>
label {
  display: block;
  margin: 0.5em 0;
  font-weight: bold;
  text-align: left;
}
.loginbox {
  margin: auto;
  width: 50%;
  min-width: 300px;
}
.loginbox input {
  display: block;
  width: 100%;
  margin-bottom: 0.5em;
  box-sizing: border-box;
}
</style>
