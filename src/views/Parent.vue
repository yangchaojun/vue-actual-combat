<template>
  <div>
    I am parent.
    <p v-for="(data,key) in dataSource" :key="key" @click="handleDetele(key)">
      <span v-for="(item,index) in data" :key="index">
        {{item.a}}
      </span>
    </p>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataSource: {}
    }
  },
  mounted() {
    this.dataSource = {
        '122': [{
          a: 'xxx'
        }, {
          a: 'xxx'
        }],
        '123': [{
          a:'zzz'
        }]
      }
  },
  methods: {
    handleDetele(key) {
      this.$delete(this.dataSource, key)
    }
  }
}
</script>

<style>

</style>
