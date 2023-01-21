<template>
  <div class="home">
    <public-blogs></public-blogs>
  </div>
</template>

<script>
import PublicBlogs from './PublicBlogs'
export default {
  name: 'home',
  created () {
    console.log('home created, are we logged in?', this.$parent.user)
  },
  data () {
    const vm = this
    return {
      user: vm.$root.user
    }
  },
  components: {
    PublicBlogs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
