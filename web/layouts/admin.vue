<template>
  <div class="root">
    <div class="left">
      <a-menu
        v-model="selectKey"
        class="navMenu"
        :default-open-keys="openKeys"
        mode="inline"
      >
        <a-sub-menu v-for="lv1 in menu" :key="lv1.name">
          <span
            slot="title"
          >
            <!--这里放icon-->
            {{ lv1.title }}</span>
          <a-menu-item v-for="lv2 in lv1.children" :key="lv1.name+'/'+lv2.name">
            {{ lv2.title }}
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
    <div class="right">
      <div class="head">
        <strong>博客管理系统</strong>
        <span class="tools">
          <span style="font-size: 14px;color: #666">欢迎，{{ user.name }}</span>
          <a-divider type="vertical" />
          <a-badge
            v-if="false"
            :count="unreadMsgNum"
            style="margin-right: 30px"
            :number-style="{
              height: '14px',
              width: '14px',
              top: '-7px',
              lineHeight: '14px',
              minWidth: '14px',
              padding: '0 3px'
            }"
            @click="notificationVisible = true"
          >
            <a-icon type="bell" />
          </a-badge>
          <a-icon type="poweroff" @click="logout" />
        </span>
      </div>
      <div class="wrap">
        <a-locale-provider :locale="zh_CN">
          <div class="adminContainer">
            <nuxt />
          </div>
        </a-locale-provider>
      </div>
    </div>
    <a-modal
      v-model="notificationVisible"
      width="750px"
      :title="`消息提醒(${unreadMsgNum})`"
      :footer="null"
    >
      <a-input style="width: 250px" />
      <div>这里是表格</div>
    </a-modal>
  </div>
</template>
<script>
// eslint-disable-next-line camelcase
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'ant-design-vue/dist/antd.css'

moment.locale('zh-cn')
export default {
  name: 'Admin',
  data () {
    return {
      unreadMsgNum: 5,
      notificationVisible: false,
      zh_CN
    }
  },
  computed: {
    user () {
      // return this.$store.state.user.user
      return {
        name: '这里是用户名'
      }
    },
    menu () {
      return this.$store.state.menu.list
    },
    openKeys () {
      const path = this.$route.path.substring(7)
      return [path, path.split('/')[0]]
    },
    selectKey: {
      get () {
        const path = this.$route.path.substring(7)
        return [path, path.split('/')[0]]
      },
      set (newValue) {
        this.$router.replace('/admin/' + newValue[0])
      }
    }
  },
  watch: {},
  async mounted () {
    await this.$store.dispatch('menu/update')
  },
  methods: {
    logout () {
      this.$router.replace('/admin/login')
    }
  }
}
</script>
<style lang="sass" scoped>
.root
  display: flex
  .left
    width: 200px
    height: 100vh
  .right
    height: 100vh
    flex: 1
    display: flex
    flex-direction: column
    .head
      display: flex
      align-items: center
      font-size: 16px
      color: #999999
      padding: 20px
      height: 60px
      position: relative
      background: white
    .wrap
      flex: 1
      background: #f5f5f5
      padding: 20px
      overflow: auto
      .adminContainer
        border-radius: 5px
        background: white
        padding: 20px
    .tools
      position: absolute
      right: 50px
      .anticon
        cursor: pointer
        font-size: 20px
        &:hover
          color: #349cfc
</style>
