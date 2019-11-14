<template>
  <div>
    <count-to :endVal="endVal"></count-to>
  </div>
</template>

<script>
import CountTo from '@/components/count-to'
export default {
  data() {
    return {
      endVal: 3500
    }
  },
  components: {
    CountTo
  }
}
</script>

<style>

</style>
