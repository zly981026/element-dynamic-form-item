<!--
 * @Date: 2020-06-15 10:00:59
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-17 13:24:22
 * @FilePath: \element-dynamic-form-item\src\components\HelloWorld.vue
--> 
<template>
  <div class="hello">
    <el-form :model="form" label-width="150px" class="form">
      <el-dynamic-form-item label="name" type="string" v-model="form.name" />
      <el-dynamic-form-item label="date" type="date" v-model="form.date" />
      <el-dynamic-form-item label="age" type="int" v-model="form.age" />
      <el-dynamic-form-item label="photo" type="file" @on-file-change="onFileChange" />
      <el-dynamic-form-item label="postscript" type="textarea" v-model="form.postscript" />
      <el-dynamic-form-item label="name" type="string" v-model="form.name" />
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElDynamicFormItem } from "../packages/dynamic-form-item";
Vue.use(ElDynamicFormItem);
import { Form } from "element-ui";
Vue.use(Form);
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private form: object = {
    name: "aaa",
    date: new Date(),
    age: 10,
    postscript: ""
  };

  onFileChange(file: File): void {
    console.log(file);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.form {
  width: 500px;
}
</style>
