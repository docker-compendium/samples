<template>
  <div class="blog">
    <lightbox
      v-bind:src="lightboxPic"
      v-bind:title="lightboxPicTitle"
      v-on:hide-lightbox="lightboxActive = false"
      v-bind:active="lightboxActive"
    ></lightbox>
    <div class="blogBody">
      <vue-dropzone id="dzone" :options="dropOptions"></vue-dropzone>
      <calendar v-bind:entries="entries"></calendar>
      <div v-if="entries.length > 0">
        <blog-entry
          v-for="entry in entries"
          v-bind:key="entry._id"
          v-bind="entry"
          v-on:pic-clicked="picClicked"
          v-on:delete-entry="delEntry"></blog-entry>
      </div>
      <div v-else>
        <p>Keine Einträge vorhanden.</p>
      </div>
    </div>
  </div>
</template>
<script>
import vueDropzone from 'vue2-dropzone'
import BlogEntry from './BlogEntry'
import Lightbox from './Lightbox'
import Calendar from './Calendar'
import request from '../util/request'
import Vue from 'vue'
import VuejsDialog from 'vuejs-dialog'
import 'vuejs-dialog/dist/vuejs-dialog.min.css'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import config from '../../config'
export default {
  name: 'blog',
  created () {
    console.log('CEATED blog: ', config)
    Vue.use(VuejsDialog)
    if (this.user) {
      request.get('/viewblog/' + this.user)
        .then(json => {
          this.$store.commit('setEntries', json)
          // this.entries = json
        })
    } else {
      request.get('/entries')
        .then(json => {
          if (json.length) {
            this.$store.commit('setEntries', json)
            // this.entries = json
          }
        })
        .catch(err => {
          console.log('Err: ', err)
          this.$router.push('/login')
        })
    }
  },
  data () {
    const vm = this
    return {
      user: this.$route.params.user,
      // entries: [ ],
      dropOptions: {
        success: function (file, done) {
          if (done._id) {
            vm.addEntry(done._id)
            this.removeAllFiles()
          }
        },
        complete: function (file) {
          if (file.xhr && file.xhr.status === 403) {
            vm.$store.commit('logout')
            vm.$router.push('/login')
          }
        },
        resizeWidth: 1200,
        dictDefaultMessage: 'Hier klicken oder Bild hier her ziehen',
        withCredentials: true,
        url: config.service.baseUrl + '/entry'
      },
      lightboxPic: '',
      lightboxPicTitle: '',
      lightboxActive: false
    }
  },
  methods: {
    delEntry: function (id) {
      this.$dialog.confirm('Wirklich löschen?', {
        okText: 'Löschen',
        cancelText: 'Abbrechen'
      })
        .then(() => {
          request.delete('/entry/' + id)
            .then(() => {
              this.$store.commit('delEntry', id)
            })
        })
        .catch(() => {
          console.log('cancel pressed')
        })
    },
    addEntry: function (id) {
      console.log('add entry to list: ', id)
      request.get('/entry/' + id)
        .then(json => {
          json.startedit = true
          this.entries.unshift(json)
          this.entries.sort((a, b) => {
            return a.date < b.date
          })
          this.$router.push('/blog#_' + json._id)
          // window.location.hash = '#_' + json._id
        })
    },
    picClicked: function (id, title) {
      this.lightboxPic = config.service.baseUrl + '/viewimage/' + id
      this.lightboxPicTitle = title
      this.lightboxActive = true
    }
  },
  computed: {
    entries () {
      return this.$store.state.entries
    }
  },
  components: {
    Calendar,
    vueDropzone,
    BlogEntry,
    Lightbox
  }

}
</script>
<style>
/* dialog: */
.dg-btn--ok {
   border-color: red;
   color: red;
 }
.dg-btn--cancel {
  background-color: gray;
}
.dg-content-cont {
  font-family: sans-serif;
}
#picupload {
  width: 90%;
  background: gray;
  min-height: 200px;
}
label {
  display: block;
  text-align: left;
  font-weight: bold;
}
textarea {
  width: 100%;
  box-sizing: border-box;
}
.blogBody {
  max-width: 90%;
  margin: auto;
}
.dropzone .dz-message {
  margin: 0.5em 0;
}
.vue-dropzone {
  border-radius: 0.5em;
  border: 3px dashed gray;
  min-height: 50px;
}
</style>
