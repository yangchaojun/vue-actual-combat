<template>
  <div>
    <a-input v-model="inputValue"/>
    <!-- <p>{{ inputValue }}</p> -->
    <a-message :message="inputValue"/>
    <!-- <p>appName: {{ appName }}</p> -->
    <p>userName: {{ userName }}</p>
  </div>
</template>

<script>
import AInput from '@/components/AInput.vue'
import AMessage from '@/components/AMessage.vue'
import { mapState } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState }  = createNamespacedHelpers('user')
export default {
  data () {
    return {
      inputValue: ''
    }
  },
  computed: {
    // ...mapState([
    //   'userName'
    // ])
    ...mapState({
      appName: state => state.appName,
    }),
    ...mapState('user', [
      'userName'
    ])
    // appName () {
    //   return this.$store.state.appName // 根文件下state
    // },
    // userName () {
    //   return this.$store.state.user.userName // 模块内state
    // }
  },
  components: {
    AInput,
    AMessage
  }
}
</script>

<style>

</style>
