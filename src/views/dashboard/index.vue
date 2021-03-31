<template>
  <el-container class="dashboard-container">
    <span>Dashboard</span>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dashboard',
  data: () => ({
    isCollapsed: false,
  }),
  mounted() {
    setTimeout(() => {
      // this.isCollapsed = true
    }, 2000);
  },
});
</script>

<style scoped lang="scss">
// .dashboard-container {}
</style>
