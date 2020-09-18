import { message } from 'ant-design-vue'

export default ({ app }) => {
  const urlPrefix = 'localhost:3000/'
  const loadings = []
  app.$axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.url = urlPrefix + config.url
    if (loadings.length > 0) {
      loadings.push('fakeLoading')
    } else {
      loadings.push(message.loading('加载中...', 0))
    }
    return config
  })

  function removeLoading () {
    if (loadings.length === 1) {
      // loadings.pop()()  暂时不开启loading框
      loadings.pop()
    } else {
      loadings.splice(loadings.findIndex(item => typeof item === 'string'), 1)
    }
  }
  // 添加响应拦截器
  app.$axios.interceptors.response.use(
    function (res) {
      // 对响应成功后做点什么
      removeLoading()
      // debugger
      if (res.data.code === 0) {
        return Promise.resolve(res.data.data)
      } else {
        message.error('执行错误：' + res.data.msg)
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject()
      }
    },
    function (error) {
      // 对响应错误做点什么
      removeLoading()
      const reg = new RegExp('failed with status code ([0-9]*)')
      const match = error.toString().match(reg)
      if (match.length > 1) {
        const code = match[1]
        if (code === '429') {
          message.error('接口调用过于频繁，请稍后再试')
        } else {
          message.error('系统错误，错误码：' + code)
        }
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject()
    }
  )
}
