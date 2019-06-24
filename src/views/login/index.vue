<template>
  <div class="login-wrap">
    <div class="login-form-wrap">
      <img src="./logo_index.png" alt>
      <el-form ref="form" :model="sizeForm" size="mini">
        <el-form-item>
          <el-input v-model="sizeForm.mobile" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <!-- 支持栅格布局，一共24列 -->
          <el-col :span="10">
            <el-input v-model="sizeForm.code" placeholder="验证码"></el-input>
          </el-col>
          <el-col :span="10" :offset="2">
            <el-button @click="handleSendCode">获取验证码</el-button>
          </el-col>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="onSubmit" class="btn-login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AppLogin',
  data () {
    return {
      sizeForm: {
        mobile: '18336225102',
        code: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit提交了')
    },
    handleSendCode () {
      const { mobile } = this.sizeForm
      axios({
        method: 'GET',
        url: `http://ttapi.research.itcast.cn/mp/v1_0/captchas/${mobile}`
      }).then(res => {
        console.log(res.data)
      })
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
.login-wrap {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("./login_bg.jpg");
  .login-form-wrap {
    background-color: #fff;
    padding: 40px;
    border-radius: 5px;
    text-align: center;
    .btn-login {
      width: 100%;
    }
    width: 200px;
  }
}
</style>
