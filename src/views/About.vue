<template>
  <div class="about">
    <base-scroll-list :config="config" />
  </div>
</template>
<script>
import BaseScrollList from "@/components/base-scroll-list";
import { ref } from "vue";
export default {
  components: {
    BaseScrollList,
  },
  setup() {
    const config = ref({});
    const header = ["姓名", "年龄", "月薪"];
    const headerStyle = [{ color: "yellow" }];
    config.value = {
      header,
      headerStyle,
      headerBg: "rgb(80,80,80)",
      headerIndex: true,
      headerHeight: "40",
    };
    return {
      config,
    };
  },
};
</script>