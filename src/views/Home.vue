<template>
  <div class="home">
    <button @click="handleClick('back')">回到上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到argument</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

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
    }
  }
}
</script>
