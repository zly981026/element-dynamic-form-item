/*
 * @Date: 2020-06-17 13:34:04
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-17 15:35:03
 * @FilePath: \element-dynamic-form-item\types\dynamic-form-item.d.ts
 */
import Vue from 'vue'
export class DynamicFormItem {
    value: string;
    label: string;
    type: string;
    rows: string;
    onChange: (val: string | boolean | number | Date) => string | boolean | number | Date;
    onFileChange: () => File;
}

export function install(vue: typeof Vue, options: any): void
