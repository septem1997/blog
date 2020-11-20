<template>
  <div>
    <div class="adminTitle">
      标签列表
    </div>
    <div class="tableWrap">
      <div class="btns">
        <a-button type="primary" @click="add()">
          新增标签
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
export default {
  name: 'Tag',
  layout: 'admin'
}
</script>

<style scoped>

</style>
