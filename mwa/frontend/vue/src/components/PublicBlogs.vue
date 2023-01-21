<template>
  <div class="publicBlogs">
    <div v-if="blogs.length > 0">
      <h2>Öffentliche Tagebucheinträge</h2>
      <ul>
        <li v-for="blog in blogs" v-bind:key="blog.id">
          <div>{{ blog.user }}</div>
          <blog-entry
            v-bind:key="blog._id"
            v-bind="blog"
          ></blog-entry>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Keine öffentlichen Foto-Tagebücher</p>
    </div>
  </div>
</template>

<script>
import BlogEntry from './BlogEntry'
import request from '../util/request'
export default {
  name: 'public-blogs',
  created () {
    request.get('/openblogs')
      .then(json => {
        this.blogs = json
      })
  },
  data () {
    return {
      blogs: [ ]
    }
  },
  components: {
    BlogEntry
  }
}
</script>
<style scoped>
ul {
  list-style: none;
  width: 50%;
  min-width: 300px;
  margin: auto;
}
li {
  display: block;
}
li a {
  color: gray;
}
</style>
