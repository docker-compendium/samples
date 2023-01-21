import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: '',
    entries: []
  },
  mutations: {
    login: (state, user) => {
      state.user = user
      state.loggedIn = true
    },
    logout: (state) => {
      state.user = ''
      state.loggedIn = false
    },
    setEntries: (state, entries) => {
      state.entries = entries
    },
    addEntry: (state, entry) => {
      state.entries.unshift(entry)
    },
    delEntry: (state, id) => {
      state.entries = state.entries.filter(val => {
        return val._id !== id
      })
    },
    updateEntry: (state, entry) => {
      console.log('commit on updateEntry ...', entry)
      state.entries = state.entries.map((obj, idx) => {
        if (obj._id === entry._id) {
          for (var key in entry) {
            if (entry.hasOwnProperty(key)) {
              obj[key] = entry[key]
            }
          }
        }
        return obj
      })
    }
  }
})
