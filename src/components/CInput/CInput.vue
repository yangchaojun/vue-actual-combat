<template>
  <input type="text" :value="currentValue" @input="handleInput" @blur="handleBlur" />
</template>

<script>
import Emitter from "@/mixins/emitter";

export default {
  name: "CInput",
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    }
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit("input", value);
      this.dispatch("FormItem", "onFormChange", value);
    },
    handleBlur() {
      this.dispatch("FormItem", "onFormBlur", this.currentValue);
    }
  }
};
</script>

<style>
</style>
