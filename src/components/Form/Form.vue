<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
import Emitter from "@/mixins/emitter.js";
import { reject } from "q";
export default {
  name: "Form",
  mixins: [Emitter],
  provide() {
    return {
      form: this
    };
  },
  props: {
    /**
     * @description 表单控件绑定的数据对象
     */
    model: {
      type: Object,
      required: true
    },
    /**
     * @description 表单校验规则
     */
    rules: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      fields: []
    };
  },
  methods: {
    // 公开方法：全部重置数据
    resetFields() {
      this.fields.forEach(field => {
        field.resetField();
      });
    },
    // 公开方法：全部校验数据，支持 Promise
    validate(callback) {
      let valid = true;
      let count = 0;
      this.fields.forEach(field => {
        field.validate("", errors => {
          console.log(errors);
          if (errors) {
            valid = false;
          }
          if (++count === this.fields.length) {
            // 全部完成
            if (typeof callback === "function") {
              callback(valid);
            }
          }
        });
      });
      console.log(this.fields);
    }
  },
  created() {
    console.log("form created");
    this.$on("onFormItemAdd", field => {
      if (field) {
        this.fields.push(field);
      }
    });
    this.$on("onFormItemRemove", field => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
    });
  },
  mounted() {
    console.log("form mounted");
  }
};
</script>

<style>
</style>
