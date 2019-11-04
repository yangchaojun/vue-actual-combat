<template>
  <div>
    <p>message:{{value}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  mounted() {
    this.$bus.$on('on-click', res => {
      this.value = res
    })
  }
}
</script>

<style>

</style>
