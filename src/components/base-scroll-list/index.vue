<template>
  <div class="base-scroll-list" :id="id">
    <div
      class="base-scroll-list-header"
      :style="{ backgroundColor: `${config.headerBg}`, height: `${config.headerHeight}px` }"
    >
      <div
        class="header-item base-scroll-list-text"
        v-for="(headerItem, i) in headerData"
        :key="headerItem + i"
        :style="headerStyleData[i]"
        v-html="headerItem"
      ></div>
    </div>
    <div class="base-scroll-list-rows"></div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import useScreen from "../../hooks/useScreen";
import { onMounted, ref } from "vue";
import cloneDeep from "lodash/cloneDeep";
import assign from "lodash/assign";
export default {
  props: {
    config: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const id = `base-scroll-list-${uuidv4()}`;
    const { height, width } = useScreen(id);
    const config = { ...props.config };
    const headerData = ref([]);
    const headerStyleData = ref([]);
    const actualConfig = ref({});
    const defaultConfig = {
      header: [],
      headerStyle: [],
      headerBg: "rgb(90,90,90)",
      headerHeight: 30,
      headerIndex: false,
      headerIndexContent: "#",
      headerIndexStyle: {},
    };
    const handleHeader = (config) => {
      const _headerData = cloneDeep(config.header);
      const _headerStyle = cloneDeep(config.headerStyle);
      if (config.header.length === 0) {
        return;
      }
      if (config.headerIndex) {
        _headerData.unshift(config.headerIndexContent);
        _headerStyle.unshift(config.headerIndexStyle);
      }
      headerData.value = _headerData;
      headerStyleData.value = _headerStyle;
    };
    onMounted(() => {
      console.log(width, height);
      const _actualConfig = assign(defaultConfig, config);
      handleHeader(_actualConfig);
      actualConfig.value = _actualConfig;
    });
    return {
      id,
      headerData,
      headerStyleData,
    };
  },
};
</script>

<style lang="scss" scoped>
.base-scroll-list {
  .base-scroll-list-text {
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }
  .base-scroll-list-header {
    display: flex;
    font-size: 15px;
    align-items: center;
  }
  .header-item {
    width: 150px;
  }
}
</style>
