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
    const headerStyle = [{ color: "yellow", width: "100px" }];
    const rowStyle = [{ color: "blue" }];
    const data = [];
    const rowBg = ["rgb(240,240,240)", "rgb(255,255,255)"];
    const aligns = ["center", "center"];
    const headerFontSize = 24;
    const rowFontSize = 20;
    const headerColor = "#fff";
    const rowColor = "#333";
    for (let i = 0; i < 10; i++) {
      data.push([
        "同学" + (i + 1),
        Math.floor(Math.random() * 10 + 20),
        Math.floor(Math.random() * 10000 + 10000),
      ]);
    }
    console.log(data);
    config.value = {
      header,
      headerStyle,
      rowStyle,
      headerBg: "rgb(80,80,80)",
      headerIndex: true,
      headerHeight: "40",
      data,
      rowNum: 10,
      rowBg,
      aligns,
      headerFontSize,
      rowFontSize,
      headerColor,
      rowColor,
    };

    return {
      config,
    };
  },
};
</script>
<style lang="scss" scoped>
.about {
  height: 400px;
}
</style>