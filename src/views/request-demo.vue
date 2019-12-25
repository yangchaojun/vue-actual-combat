<template>
  <div>
    <button @click="handleClick">请求</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    handleClick() {
      axios.get("/api/user").then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style>
</style>
