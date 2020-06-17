<!--
 * @Date: 2020-06-15 10:05:10
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-17 18:20:54
 * @FilePath: \element-dynamic-form-item\packages\dynamic-form-item\DynamicFormItem.vue
--> 
<template>
  <el-form-item :label="label" :label-width="labelWidth" class="el-dynamic-form-item">
    <el-input
      v-if="type === 'int'"
      type="number"
      size="small"
      :value="value"
      @input="onValueChange"
    />
    <el-input
      v-else-if="type === 'string'"
      type="text"
      size="small"
      :value="value"
      @input="onValueChange"
    />
    <el-input
      v-else-if="type === 'textarea'"
      type="textarea"
      :rows="rows"
      size="small"
      :value="value"
      @input="onValueChange"
    />
    <!-- <el-input
      v-else-if="type === 'date'"
      type="date"
      size="small"
      :value="value"
      @input="onValueChange"
    />-->
    <el-date-picker
      class="date-picker"
      v-else-if="type === 'date'"
      size="small"
      type="date"
      :value="value"
      @input="onValueChange"
    />
    <div v-else-if="type === 'file'" class="file-upload">
      <el-upload
        :on-change="onFileChange"
        :show-file-list="false"
        class="upload-btn"
        :auto-upload="false"
        action
        :multiple="false"
      >
        <el-button slot="trigger" size="small" type="primary">upload</el-button>
      </el-upload>
      <p class="file-name">{{getFileName}}</p>
    </div>
  </el-form-item>
</template>
<script lang="ts">
import { Component, Prop, Emit, Model, Watch } from "vue-property-decorator";
import { Button, Input, Upload, FormItem, DatePicker } from "element-ui";
import Vue from "vue";
import { VuePluginComponent } from "../vue-plugin-component";

Vue.use(Button);
Vue.use(Input);
Vue.use(Upload);
Vue.use(FormItem);
Vue.use(DatePicker);

@Component({ name: "ElDynamicFormItem" })
export default class ElDynamicFormItem extends VuePluginComponent {
  @Prop()
  label!: string;

  @Prop({ default: "150px" })
  labelWidth!: string;

  @Prop()
  @Model("on-change")
  value!: string | boolean | number | Date;

  @Prop()
  type!: string;

  @Prop({ default: 6 })
  rows!: number;

  @Emit("on-change")
  private onValueChange(
    val: string | boolean | number | Date
  ): string | boolean | number | Date {
    return val;
  }

  public static install(vue: typeof Vue): void {
    vue.component(ElDynamicFormItem.name, ElDynamicFormItem);
  }

  private localValue!: Date;
  @Watch("value", { immediate: true })
  onDateValueChange(val: string | boolean | number | Date) {
    if (this.type === "date" && val instanceof Date) {
      this.localValue = val;
    }
  }

  fileValue: File | null = null;

  @Emit("on-file-change")
  onFileChange(val: File, list: FileList): File {
    console.log(val);
    console.log(list);

    this.fileValue = val;
    return this.fileValue;
  }

  get getFileName(): string {
    return this.fileValue?.name ?? "";
  }
}
</script>
<style lang="less" scoped>
.el-dynamic-form-item {
  .file-upload {
    display: flex;
    align-items: center;
    .file-name {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0 5px;
    }
  }
  .date-picker {
    width: 100% !important;
  }
}
</style>