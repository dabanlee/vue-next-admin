<template>
  <div class="logo-container">
    <router-link class="logo" to="/dashboard"></router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Logo',
})
</script>

<style lang="scss" scoped>
.logo-container {
  $height: 60px;
  height: $height;
  display: flex;
  box-sizing: border-box;
  padding: 7.5px 10px;
  align-items: center;

  .logo {
    $size: 45px;
    display: inline-block;
    width: $size;
    height: $size;
    border-radius: 5px;
    overflow: hidden;
    background-color: #fff;
  }
}
</style>
