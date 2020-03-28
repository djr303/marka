<template>
  <div id="app">
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import "./scss/_variables.scss";

@font-face {
  font-family: 'Baloo Thambi 2';
  src: url(/fonts/BalooThambi2-Medium.ttf);
}

html, body, #app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  background: $bg;
  color: $font;
}

body {
  font-family: 'Baloo Thambi 2', Helvetica, Arial, sans-serif;
}

a, a:active, a:hover, a:visited {
  color: $orange;
  &:hover {
    text-decoration: underline;
  }
}
</style>
