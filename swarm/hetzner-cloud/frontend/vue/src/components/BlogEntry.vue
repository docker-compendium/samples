<template>
  <div class="blog-entry" :id="'_' + _id">
    <div class="entryHeader" v-bind:class="{ publicEntry: publicEntry }">
      <span class="title">{{ title }}</span>
      <span class="date">{{ date | dateFormat }}</span>
      <div class="editElements" v-if="user !== ''">
        <span class="lock" @click="togglePublic">
          <span v-if="publicEntry"> 🔓 </span>
          <span v-else> 🔒 </span>
        </span>
        <span class="edit" @click="edit = true"> ✎ </span>
        <span class="delete" @click="$emit('delete-entry', _id)"> ✗ </span>
      </div>
    </div>
    <div class="entryBody">
      <div class="blogpic">
        <img @click="$emit('pic-clicked', _id, title)" v-bind:src="img.thumbnail" />
      </div>
      <div class="note">
        <div v-if="edit">
          <blog-edit-entry
            v-bind:_id="_id"
            v-bind:note="note"
            v-bind:date="date"
            v-bind:title="title"
            v-on:cancel-entry="edit = false"
            v-on:update-done="edit = false"
          ></blog-edit-entry>
        </div>
        <div v-else>
          <h3>{{title}}</h3>
          <div v-html="compiledNote"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BlogEditEntry from './BlogEditEntry'
import request from '../util/request'
import marked from 'marked'
export default {
  name: 'blog-entry',
  props: [ 'date', 'title', 'pic', 'mime', 'note', '_id', 'thumbnail', 'startedit', 'publicEntry' ],
  methods: {
    togglePublic: function () {
      request.patch('/entry/' + this._id, {
        publicEntry: !this.publicEntry
      })
        .then(json => {
          console.log('json: ', json)
          if (json.success === false) {
            console.log('cannot modify')
          } else {
            this.publicEntry = !this.publicEntry
          }
        })
    }
  },
  computed: {
    img: function () {
      return {
        thumbnail: 'data:' + this.mime + ';base64,' + this.thumbnail,
        title: this.title
      }
    },
    compiledNote: function () {
      return marked(this.note || '', { sanitize: true })
    },
    user () {
      return this.$store.state.user
    }
  },
  data () {
    return {
      edit: this.startedit || false,
      entry: {
        _id: this._id,
        note: this.note || '',
        publicEntry: this.publicEntry || false,
        title: this.title,
        date: this.date
      }
    }
  },
  components: {
    BlogEditEntry
  }
}
</script>
<style lang="scss" scoped>
.entryHeader {
  padding-top: 1em;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 1rem;
  background-color: darkslategray;
  color: white;
  &.publicEntry {
    background-color: green;
  }
  .title {
    font-weight: bold;
  }
  .editElements span {
    cursor: pointer;
    margin: 0 0.3em;
  }
}
.entryBody {
  text-align: left;
  box-sizing: border-box;
}
.note {
  box-sizing: border-box;
  padding: 0 1rem;
  display: inline-block;
  vertical-align: top;
  width: 80%;
}
.note h3 {
  margin-top: 0;
}
.blogpic {
  box-sizing: border-box;
  display: inline-block;
  width: 19%;
  max-width: 250px;
  max-height: 250px;
}
.blogpic img {
  max-width: 100%;
}
</style>
