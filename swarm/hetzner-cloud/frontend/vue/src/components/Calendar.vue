<template>
  <div class="cal">
    <calendar-view
      class="theme-default holiday-de-traditional holiday-de-official"
      :startingDayOfWeek="1"
      :events="events"
      :locale="'de'"
      v-on:click-event="eventClicked"
      v-on:show-date-change="dateChanged"
      :show-date="showDate"
    >
      <calendar-view-header
        slot="header"
        slot-scope="t"
        :header-props="t.headerProps"
        @input="dateChanged"
      ></calendar-view-header>
    <template slot="event" slot-scope="props">
      <div
        :class="['cv-event', ...props.event.classes]"
        :key="props.event.id"
        v-bind:style="{ 'background-image': props.event.originalEvent.thumbnail, top: props.top }"
      >
      <router-link :to="props.event.originalEvent.url">{{ props.event.title }}</router-link>
      </div>
    </template>
  </calendar-view>
  </div>
</template>
<script>
import { CalendarView, CalendarViewHeader } from 'vue-simple-calendar'

// import CalendarView from 'vue-simple-calendar'
import request from '../util/request'
import 'vue-simple-calendar/static/css/default.css'
import 'vue-simple-calendar/static/css/holidays-us.css'
export default {
  name: 'calendar',
  props: [ 'entries' ],
  watch: {
    entries () {
      if (this.entries && this.entries.length) {
        this.showDate = new Date(this.entries[0].date)
      }
    }
  },
  computed: {
    events () {
      return this.entries.map(val => {
        return {
          startDate: val.date,
          title: val.title,
          thumbnail: 'url(data:' + val.mime + ';base64,' + val.thumbnail + ')',
          id: val._id,
          url: '#_' + val._id
        }
      })
    }
  },
  data () {
    return {
      showDate: new Date()
    }
  },
  methods: {
    eventClicked (e) {
      console.log('EVENT clicked ', e)
      window.location.hash = '#' + e.id
    },
    dateChanged (d) {
      console.log('Date event ', d)
      this.showDate = d
      request.get('/entries/' + d.getFullYear() + '-' + (d.getMonth() + 1).toLocaleString('de', { minimumIntegerDigits: 2 }))
        .then(json => {
          if (json.length) {
            this.$store.commit('setEntries', json)
            // this.entries = json
          }
        })
    }
  },
  components: {
    CalendarView,
    CalendarViewHeader
  }
}
</script>
<style lang="scss">
.cal {
  min-height: 550px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.theme-default .cv-event {
  // height: 100%;
  height: auto;
  min-height: 50%;
  border-radius: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  a, a:visited {
    color: black;
    background: white;
    text-decoration: none;
    opacity: 0.7;
    padding: 0.2em;
  }
}
</style>
