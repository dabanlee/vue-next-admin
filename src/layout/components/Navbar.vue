<template>
  <el-header class="navbar-container">
    <el-button @click="toggleSidebar"></el-button>
    <el-dropdown trigger="click">
      <el-avatar :size="50" :src="require('@/assets/avatar.jpg')"></el-avatar>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar',
  methods: {
    toggleSidebar() {
      this.$store.commit('app/TOGGLE_SIDEBAR')
    },
  },
})
</script>

<style lang="scss" scoped>
.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafa;
}

.el-avatar {
  cursor: pointer;
}
</style>
