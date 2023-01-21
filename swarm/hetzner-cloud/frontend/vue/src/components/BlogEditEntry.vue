<template>
  <div>
    <datetime type="datetime" v-model="blogdate"></datetime>
    <input autofocus v-model="blogtitle">
    <div v-if="preview">
      <div v-html="compiledMarkdown"></div>
    </div>
    <div v-else>
      <textarea v-model="blognote"></textarea>
    </div>
    <button @click="updateEntry">✓</button>
    <button @click="cancelEntry">✗</button>
    <button @click="togglePreview">Markdown Vorschau</button>
  </div>
</template>
<script>
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import request from '../util/request'
import marked from 'marked'
export default {
  name: 'blog-edit-entry',
  props: [ '_id', 'title', 'note', 'date' ],
  methods: {
    togglePreview: function () {
      this.preview = !this.preview
    },
    cancelEntry: function () {
      this.$emit('cancel-entry')
    },
    updateEntry: function () {
      request.patch('/entry/' + this._id, {
        date: this.blogdate,
        title: this.blogtitle,
        note: this.blognote
      })
        .then(() => {
          this.$emit('update-done')
          this.$store.commit('updateEntry', {
            title: this.blogtitle,
            note: this.blognote,
            date: this.blogdate,
            _id: this._id
          })
        })
    }
  },
  data () {
    return {
      blognote: this.note || '',
      blogdate: this.date,
      blogtitle: this.title,
      preview: false
    }
  },
  computed: {
    compiledMarkdown: function () {
      if (!this.blognote) {
        return ''
      }
      return marked(this.blognote, { sanitize: true })
    }
  },
  components: {
    datetime: Datetime
  }
}
</script>
<style lang="scss" >
input, textarea {
  font-weight: 400;
  font-size: 26px;
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
  color: #999;
  border: none;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
  padding: 0 1em;
}
textarea {
  padding: 1em;
  line-height: 1.5em;
  border-radius: 3px;
}
</style>
