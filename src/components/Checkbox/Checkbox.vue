<template>
  <label>
    <span>
      <input type="checkbox" :disabled="disabled" :checked="currentValue" @change="change" />
    </span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: false
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value(val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel();
      } else {
        throw "Value should be trueValue or falseValue.";
      }
    }
  },
  methods: {
    change(event) {
      if (this.disabled) {
        return false;
      }

      const checked = event.target.value;
      this.currentValue = checked;

      const value = checked ? this.trueValue : this.falseValue;
      this.$emit("input", value);
      this.$emit("on-change", value);
    }
  },
  updateModel() {
    this.currentValue = this.value === this.trueValue;
  }
};
</script>

<style>
</style>
