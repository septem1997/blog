<template>
  <div class="container">
    <div class="login">
      <img src="https://rescdn.qqmail.com/zh_CN/htmledition/images/webp/tg-bird1fbc69.png">
      <a-form class="loginBox" :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }" @submit="handleSubmit">
        <a-form-item label="账号">
          <a-input
            v-decorator="['username', { rules: [{ required: true, message: '请输入账号' }] }]"
          />
        </a-form-item>
        <a-form-item label="密码">
          <a-input
            v-decorator="['password', { rules: [{ required: true, message: '请输入密码' }] }]"
            type="password"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 24, offset: 8 }">
          <a-button type="primary" html-type="submit">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'blank', // 使用空白布局
  data () {
    return {
      form: this.$form.createForm(this) // 初始化form实例
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (!err) {
          const token = await this.$axios.post('login', values)
          sessionStorage.setItem('token', 'Bearer ' + token)
          this.$router.replace(this.$route.query.redirect || '/admin/')
        }
      })
    }
  }
}
</script>

<style scoped lang="sass">
.container
  height: 100vh
  .login
    display: flex
    width: 960px
    .loginBox
      border: 1px solid #ebedf0
      border-radius: 2px
      padding: 48px 24px
      margin-left: 96px
</style>
