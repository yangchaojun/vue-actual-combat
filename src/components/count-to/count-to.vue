<template>
  <div>
    <span :id="eleId"></span>
  </div>
</template>

<script>
import { CountUp } from "countup.js";
export default {
  name: "CountUp",
  props: {
    /**
     * @description: 起始值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 最终值
     */
    endVal: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      counter: {}
    };
  },
  computed: {
    eleId() {
      return `count_up_${this._uid}`;
    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.eleId);
      this.counter = new CountUp(this.eleId, this.endVal);

      if (!this.counter.error) {
        this.counter.start();
      } else {
        console.error(this.counter.error);
      }
    });
  }
};
</script>

<style>
</style>
