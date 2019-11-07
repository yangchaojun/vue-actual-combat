<template>
  <div>
    <a-input v-model="inputValue"/>
    <!-- <p>{{ inputValue }}</p> -->
    <a-message :message="inputValue"/>
    <!-- <p>appName: {{ appName }}, the lastLetter is {{lastLetter}}</p> -->
    <p>userName: {{ userName }},the firstLetter is {{firstLetter}}</p>
  </div>
</template>

<script>
import AInput from '@/components/AInput.vue'
import AMessage from '@/components/AMessage.vue'
import { mapState, mapGetters } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const {mapState, mapGetters }  = createNamespacedHelpers('user')
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
    // ...mapGetters([
    //   'lastLetterOfAppName'
    // ]),
    ...mapGetters([
      'firstLetter'
    ]),
    // ...mapState({
    //   appName: state => state.appName,
    // }),
    ...mapState({
      userName: state => state.user.userName
    })
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
  },
  mounted () {
    console.log(this.$store.getters.lastLetterOfAppName);
  }
}
</script>

<style>

</style>
