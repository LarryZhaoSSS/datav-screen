<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { reactive, computed, onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {});
  }
};
</script>
<style lang="scss" >
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  font-family: "Microsoft Yahei", Arial, sans-serif;
  overflow: hidden;
}
</style>
