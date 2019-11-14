<template>
  <div class="home">
    <button @click="handleClick('back')">回到上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到argument</button>
    <!-- <button><button @click="handleGetUserInfo">获取用户信息</button></p> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '@/api/user'

export default {
  name: 'home',
  components: {
    HelloWorld
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(vm);
    })
  },
  beforeRouteLeave (to, from, next ) {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  },
  methods: {
    handleClick(type) {
      if(type === 'back') this.$router.go(-1) // this.$router.back()
      else if (type === 'push') this.$router.push('/parent')
      else if (type === 'replace') {
        this.$router.replace({
          name: 'argument',
          params: {
            name: 'yangchaojun'
          },
          query: {
            sex: 'male'
          }
        })
      }
    },
    handleGetUserInfo() {
      getUserInfo({
        userId: 21
      }).then(res => {
        console.log(`res:${res}`);
      })
    }
  }
}
</script>
