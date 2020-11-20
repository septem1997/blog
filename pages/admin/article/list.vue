<template>
  <div>
    <div class="adminTitle">
      文章列表
    </div>
    <div class="tableWrap">
      <div class="btns">
        <a-button type="primary" @click="addArticle()">
          新增文章
        </a-button>
      </div>
      <a-divider />
      <a-table
        :columns="columns"
        :row-key="record => record.id"
        :data-source="data"
        :pagination="pagination"
        @change="handleChange"
      >
        <template slot="operation" slot-scope="text, record">
          <a-popconfirm
            title="确定删除该文章吗?"
            @confirm="() => handleDel(record.id)"
          >
            <a href="javascript:">删除</a>
          </a-popconfirm>
        </template>
      </a-table>
    </div>
    <a-modal
      v-model="formVisible"
      title="编辑文章"
      width="90%"
      :force-render="true"
      @ok="handleOk"
      @cancel="resetForm"
    >
      <a-form style="height: 400px" :form="form" :label-col="{ span: 3 }" :wrapper-col="{ span: 21 }">
        <a-form-item v-show="false">
          <a-input
            v-decorator="['id']"
          />
        </a-form-item>
        <a-form-item label="标题">
          <a-input
            v-decorator="['title', { rules: [{ required: true, message: '请输入标题' }] }]"
          />
        </a-form-item>
        <div class="articleArea">
          <editor
            v-model="content"
            api-key="cf4gjmenzwh742lot9hyft8ygrf9mjqrmv5asdbxwhjai8wk"
            :init="{
              language: 'zh_CN',
              height: 320,
              width:'100%',
              images_upload_handler: uploadImg,
              menubar: false,
              file_picker_types: 'image',
              plugins: [
                'advlist autolink link image lists charmap print preview hr anchor pagebreak',
                'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
                'table emoticons template paste help'
              ],
              toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
                'bullist numlist outdent indent | link image | print preview media fullpage | ' +
                'forecolor backcolor emoticons | help',
            }"
          />
        </div>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  name: 'List',
  components: {
    editor: Editor
  },
  data () {
    return {
      pagination: {
        pageSize: 5, // 给定默认一页5行数据
        current: 1, // 给定默认第一页
        total: 0 // total代表数据总数，根据这个数字来进行分多少页(既total/pageSize)
      },
      data: [],
      form: this.$form.createForm(this),
      formVisible: false,
      content: '',
      columns: [
        {
          title: '标题',
          dataIndex: 'title'
        }, {
          title: '摘要',
          dataIndex: 'summary'
        }, {
          title: '阅读量',
          dataIndex: 'viewNum'
        }, {
          title: '创建时间',
          dataIndex: 'createTime'
        }, {
          title: '操作',
          scopedSlots: { customRender: 'operation' }
        }
      ]
    }
  },
  mounted () {
    this.getData(this.pagination)
  },
  methods: {
    uploadImg (blobInfo, success, failure) {
      // 文件上传需要form格式，所以需要new一个FormData对象
      const form = new FormData()
      form.append('file', blobInfo.blob())
      this.$axios({
        url: 'upload',
        method: 'post',
        data: form,
        headers: {
          'Content-Type': 'multipart/form-data' // 文件上传需指定contentType为form，与data的内容一致
        }
      }).then((res) => {
        success(res)
      }).catch(() => {
        failure()
      })
    },
    addArticle () {
      this.formVisible = true
    },
    resetForm () {
      this.form.resetFields()
      this.content = ''
    },
    async handleDel (id) {
      await this.$axios.post('article/delete', {
        ids: [id]
      })
      this.getData(this.pagination)
    },
    handleOk () {
      this.form.validateFields(async (err, values) => {
        if (!err) {
          // this.content为html文本，所以需要再创建一个dom元素来提取纯文本（即不带html标签的文本）
          const dom = document.createElement('div')
          dom.innerHTML = this.content
          const summary = dom.textContent.substr(0, 64) // 截取全文的前64个字作为文章的摘要
          await this.$axios.post('article/edit', Object.assign(values, {
            content: this.content,
            summary
          }))
          this.resetForm()
          this.getData(this.pagination)
          this.formVisible = false
        }
      })
    },
    async getData (pagination) {
      const res = await this.$axios({
        url: 'article',
        params: {
          pageNum: pagination.current,
          pageSize: pagination.pageSize
        }
      })
      // 读取数据后更新分页数据
      pagination.total = res.total
      this.pagination = pagination
      this.data = res.list
    },
    handleChange (pagination) {
      this.getData(pagination)
      console.log(this.pagination)
      console.log(pagination)
    }
  },
  layout: 'admin'
}
</script>

<style scoped lang="sass">
.articleArea
  display: flex
  width: 100%
  align-items: center
</style>
