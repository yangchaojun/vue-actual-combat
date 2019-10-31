<template>
  <div>
    <h1>动态路由</h1>
    {{ $route.params.name }}
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  }
}
</script>

<style>

</style>
