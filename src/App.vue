<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: `App`,
})
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>