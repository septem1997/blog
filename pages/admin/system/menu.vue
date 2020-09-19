<template>
  <div>
    <div class="adminTitle">
      后台菜单管理
    </div>
    <div class="tableWrap">
      <div class="btns">
        <a-button type="primary" @click="addMenu()">
          新增菜单
        </a-button>
      </div>
      <a-divider />
      <a-tree
        v-model="checkedKeys"
        :selectable="false"
        :tree-data="treeData"
        :replace-fields="replaceFields"
      >
        <div slot="title" slot-scope="item">
          {{ item.title }}
          <a style="margin-left: 12px" @click="addMenu(item)">
            <a-icon type="plus-circle" />
          </a>
          <a-divider type="vertical" />
          <a @click="editMenu(item)">
            <a-icon type="edit" />
          </a>
          <a-divider type="vertical" />
          <a @click="delMenu(item)">
            <a-icon type="delete" />
          </a>
        </div>
      </a-tree>
    </div>

    <a-modal
      v-model="formVisible"
      title="编辑菜单"
      :force-render="true"
      @ok="handleOk"
      @cancel="form.resetFields()"
    >
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }">
        <a-form-item v-show="false">
          <a-input
            v-decorator="['id']"
          />
        </a-form-item>
        <a-form-item v-show="false">
          <a-input
            v-decorator="['parentId']"
          />
        </a-form-item>
        <a-form-item label="名称">
          <a-input
            v-decorator="['name', { rules: [{ required: true, message: '请输入名称' }] }]"
          />
        </a-form-item>
        <a-form-item label="标题">
          <a-input
            v-decorator="['title', { rules: [{ required: true, message: '请输入标题' }] }]"
          />
        </a-form-item>
        <a-form-item label="图标">
          <a-input
            v-decorator="['icon']"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  layout: 'admin',
  data () {
    return {
      formVisible: false,
      replaceFields: { children: 'children', title: 'title', key: 'name' },
      checkedKeys: [],
      form: this.$form.createForm(this)
    }
  },
  computed: {
    treeData () {
      // 因为store里的内容不可修改，所以深拷贝一遍变成一个新的列表
      const list = JSON.parse(JSON.stringify(this.$store.state.menu.list))
      // 添加scopedSlots以便自定义树形列表标题
      this.appendSlots(list)
      return list
    }
  },
  mounted () {

  },
  methods: {
    async delMenu (node) {
      // todo 弹出对话框询问后再删除
      await this.$axios.post('menu/delete?id=' + node.id)
      sessionStorage.removeItem('menu')
      await this.$store.dispatch('menu/update') // 同下面的handleOk方法
    },
    editMenu (node) {
      this.form.setFieldsValue(node)
      this.formVisible = true
    },
    addMenu (node) {
      if (node) {
        this.form.setFieldsValue(Object.assign({}, {
          parentId: node.id
        }))
      } else {
        this.form.setFieldsValue({})
      }
      this.formVisible = true
    },
    handleOk () {
      this.form.validateFields(async (err, values) => {
        if (!err) {
          await this.$axios.post('menu/edit', values)
          sessionStorage.removeItem('menu')
          await this.$store.dispatch('menu/update') // 因为menu是储存在store里的，所以要删除缓存再dispatch
          this.formVisible = false
          this.form.resetFields()
        }
      })
    },
    appendSlots (list) {
      for (const item of list) {
        item.scopedSlots = { title: 'title' }
        if (item.children) {
          this.appendSlots(item.children)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
