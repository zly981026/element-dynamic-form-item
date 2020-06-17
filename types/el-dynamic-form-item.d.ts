/*
 * @Date: 2020-06-17 13:34:04
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-17 13:40:57
 * @FilePath: \element-dynamic-form-item\types\el-dynamic-form-item.ts
 */
export declare class ElDynamicFormItem {
    value: string;
    label: string;
    type: string;
    rows: string;
    onChange: (val: string | boolean | number | Date) => string | boolean | number | Date;
    onFileChange: () => File;
}