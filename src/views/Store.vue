<template>
  <div>
    <a-input v-model="inputValue"/>
    <!-- <p>{{ inputValue }}</p> -->
    <a-message :message="inputValue"/>
    <p>appName: {{ appName }}, the lastLetter is {{lastLetterOfAppName}}</p>
    <p>userName: {{ userName }},the firstLetter is {{firstLetter}}</p>
    <button @click="handleCommit">点击提交commit</button>
    <button @click="handleAddNewState">点击在store中添加新属性</button>
    <button @click="handleSetUserName">设置userName</button>
    {{appVersion}}
  </div>
</template>

<script>
import AInput from '@/components/AInput.vue'
import AMessage from '@/components/AMessage.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const {mapState, mapGetters }  = createNamespacedHelpers('user')
export default {
  data () {
    return {
      inputValue: ''
    }
  },
  computed: {
    ...mapState([
      'appName',
      'appVersion'
    ]),
    ...mapState({
      userName: state => state.user.userName
    }),
    ...mapGetters([
      'lastLetterOfAppName',
      'firstLetter'
    ]),
    // ...mapState({
    //   appName: state => state.appName,
    // }),
    // ...mapState({
    //   userName: state => state.user.userName
    // })
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
  },
  methods: {
    ...mapMutations([
      'SET_APP_NAME',
      'SET_USER_NAME'
    ]),
    handleCommit() {
      // this.$store.commit('SET_APP_NAME', {
      //   appName: 'newAppName'
      // })
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'newAppName'
      // })
      this.SET_APP_NAME('newAppName')
    },
    handleAddNewState() {
      this.$store.commit('SET_APP_VERSION')
    },
     handleSetUserName() {
       this.SET_USER_NAME('Lison')
    }
  }
}
</script>

<style>

</style>
