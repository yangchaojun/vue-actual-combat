<template>
  <div>
    <h1>动态路由</h1>
    <p>路由参数形式：{{ $route.params.name }}</p>
    <p>组件属性形式：{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'yangchaojun'
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
  }
}
</script>

<style>

</style>
