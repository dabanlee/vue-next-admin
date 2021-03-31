<template>
  <el-aside class="sidebar-container">
    <el-scrollbar>
      <logo></logo>
      <el-menu router :collapse="!sideOpen" background-color="#303133" text-color="#fff">
        <el-menu-item index="dashboard">
          <i class="el-icon-cherry"></i>
          <template #title>控制面板</template>
        </el-menu-item>
        <el-menu-item index="settings">
          <i class="el-icon-lollipop"></i>
          <template #title>设置</template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import Logo from '@/layout/components/Logo.vue'

export default defineComponent({
  name: 'Sidebar',
  components: {
    Logo,
  },
  data: () => ({
    isCollapsed: false,
  }),
  computed: {
    ...mapGetters({
      sideOpen: 'app/sideOpen',
    }),
  },
})
</script>

<style scoped lang="scss">
.sidebar-container {
  width: auto !important;
  height: 100vh;
  background-color: #303133;

  .el-menu {
    width: 300px;
    border-right: 1px solid #303133;
    user-select: none;

    &.el-menu--collapse {
      width: 64px;
    }
  }
}
</style>
