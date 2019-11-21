<template>
  <div>
    <label v-if="label" :class="{ 'i-form-item-label-required': isRequired }">{{ label }}</label>
    <div>
      <slot></slot>
      <div v-if="validateState === 'error'" class="i-form-item-message">{{ validateMessage }}</div>
    </div>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
import Emitter from "@/mixins/emitter.js";
export default {
  name: "FormItem",
  mixins: [Emitter],
  inject: ["form"],
  props: {
    /**
     * @description 标签文本
     */
    label: {
      type: String,
      required: true
    },
    /**
     * @description 对应表单域 Form 组件 model 里的字段
     */
    prop: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      validateState: "", // 校验状态
      validateMessage: "", // 校验不通过时的提示信息
      isRequired: false
    };
  },
  computed: {
    // 从 Form 的 model 中动态得到当前表单组件的数据
    fieldValue() {
      return this.form.model[this.prop];
    }
  },
  mounted() {
    console.log("formitem mounted");
    if (this.prop) {
      this.dispatch("Form", "onFormItemAdd", this);
      // 设置初始值，以便在重置时恢复默认值
      this.initialValue = this.fieldValue;
      this.setRules();
    }
  },
  beforeDestroy() {
    console.log("formitem beforeDestroy");
    this.dispatch("Form", "onFormItemRemove", this);
  },
  methods: {
    setRules() {
      let rules = this.getRules();
      if (rules.length) {
        this.isRequired = rules.some(rule => {
          // 如果当前校验规则中有必填项，则标记出来
          return rule.required;
        });
      }
      this.$on("onFormBlur", this.onFieldBlur);
      this.$on("onFormChange", this.onFieldChange);
    },
    // 从 Form 的 rules 属性中，获取当前 FormItem 的校验规则
    getRules() {
      let formRules = this.form.rules;

      formRules = formRules ? formRules[this.prop] : [];

      return [].concat(formRules || []);
    },
    // 重置数据
    resetField() {
      this.validateState = "";
      this.validateMessage = "";

      this.form.model[this.prop] = this.initialValue;
    },
    // 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules.filter(
        rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      );
    },
    /**
     * 校验数据
     * @param trigger 校验类型
     * @param callback 回调函数
     */
    validate(trigger, callback = function() {}) {
      let rules = this.getFilteredRule(trigger);
      console.log(rules);
      if (!rules || rules.length === 0) {
        return true;
      }

      // 设置状态为校验中
      this.validateState = "validating";

      // 以下为 async-validator 库的调用方法
      let descriptor = {};
      descriptor[this.prop] = rules;

      const validator = new AsyncValidator(descriptor);
      let model = {};

      model[this.prop] = this.fieldValue;

      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? "success" : "error";
        this.validateMessage = errors ? errors[0].message : "";
        callback(this.validateMessage);
      });
    },
    onFieldBlur() {
      this.validate("blur");
    },
    onFieldChange() {
      this.validate("change");
    }
  }
};
</script>

<style>
.i-form-item-label-required:before {
  content: "*";
  color: red;
}
.i-form-item-message {
  color: red;
}
</style>
