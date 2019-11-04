<template>
  <div>
    AMessage: {{message}}
  </div>
</template>

<script>
export default {
  name: 'AMessage',
  props: {
    message: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style>

</style>
