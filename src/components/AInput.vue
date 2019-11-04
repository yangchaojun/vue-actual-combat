<template>
  <div>
    <input type="text" :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    handleClick () {
      this.$emit('on-click', 'hello')
    }
  }
}
</script>

<style>

</style>
