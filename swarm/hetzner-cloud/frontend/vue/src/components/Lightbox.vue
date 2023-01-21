<template>
  <div class="lightbox"
    @click="$emit('hide-lightbox')"
    v-bind:class="{ active: active }" >
    <img v-bind:src="src" :alt="title" />
    <a class="close" href="#" @click="$emit('hide-lightbox')"> ✗ </a>
    <div class='title'> <span>{{ title }}</span> </div>
  </div>
</template>
<script>
export default {
  name: 'lightbox',
  props: [ 'src', 'title', 'active' ]
}
</script>

<style lang="scss" scoped>
.lightbox {
  z-index: 2;
  position: fixed;
  top: -100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  overflow: hidden;
  img {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-height: 0%;
    max-width: 0%;
    border: 3px solid white;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    transition: 0.5s ease-in-out;
  }
  .title {
    position: absolute;
    top: -80px;
    opacity: 0.7;
    display: inline-block;
    color: black;
    transition: 0.5s ease-in-out;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1em;
    left: 0;
    right: 0;
    span {
      border-radius: 0.5em;
      display: inline-block;
      font-style: italic;
      background: white;
      padding: 1.1em 1em;
    }
  }
  .close {
    display: block;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    background: white;
    color: black;
    text-decoration: none;
    position: absolute;
    font-size: 2em;
    padding-top: 0.25em;
    top: -80px;
    right: 0;
    transition: 0.5s ease-in-out;
  }
  &.active {
    opacity: 1;
    top: 0;
    bottom: 0;
    img {
      max-height: 100%;
      max-width: 100%;
    }
    .close, .title {
      top: 0px;
    }
  }
}
</style>
