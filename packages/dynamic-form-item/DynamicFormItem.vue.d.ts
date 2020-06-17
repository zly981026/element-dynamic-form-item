import Vue from "vue";
import { VuePluginComponent } from "../vue-plugin-component";
export default class ElDynamicFormItem extends VuePluginComponent {
    label: string;
    value: string | boolean | number | Date;
    type: string;
    rows: number;
    private onValueChange;
    static install(vue: typeof Vue): void;
    private localValue;
    onDateValueChange(val: string | boolean | number | Date): void;
    fileValue: File | null;
    onFileChange(val: File, list: FileList): File;
    get getFileName(): string;
}
