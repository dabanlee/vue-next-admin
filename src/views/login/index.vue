<template>
  <el-container class="login-container">
      <div class="Logo"><img :src="require('@/assets/logo.png')" alt="Logo"></div>
      <el-card class="login">
        <el-form ref="form" v-model="form">
          <el-form-item>
            <el-input v-model="form.email" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login',
  data: () => ({
    form: {
      email: ``,
      password: ``,
    },
  }),
  methods: {
    onSubmit() {
      console.log(this.form)
    },
  },
});
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  flex-direction: column;
  // justify-content: center;
  align-items: center;

  .Logo {
    $size: 150px;
    width: $size;
    height: $size;
    margin-top: 200px;
    margin-bottom: 20px;

    & > img {
      width: 100%;
    }
  }

  .login {
    width: 400px;

    .el-button {
      width: 100%;
    }
  }

  .el-form-item {
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
