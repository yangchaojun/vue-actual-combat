<template>
  <div>
    <a-input v-model="inputValue"/>
    <!-- <p>{{ inputValue }}</p> -->
    <a-message :message="inputValue"/>
  </div>
</template>

<script>
import AInput from '@/components/AInput.vue'
import AMessage from '@/components/AMessage.vue'
export default {
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AMessage
  }
}
</script>

<style>

</style>
