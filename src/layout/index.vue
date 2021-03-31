<template>
  <el-container class="app-container">
    <sidebar></sidebar>
    <el-container class="is-vertical">
      <navbar></navbar>
      <el-container>
        <el-main class="main-container">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from '@/layout/components/Sidebar.vue'
import Navbar from '@/layout/components/Navbar.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
  },
  data: () => ({
    // 
  }),
});
</script>

<style scoped lang="scss">
.app-container {
  min-height: 100vh;
}
</style>
