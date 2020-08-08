<template>
  <div class="base-scroll-list" :id="id">
    <div
      class="base-scroll-list-header"
      :style="{ backgroundColor: `${config.headerBg}`, height: `${config.headerHeight}px`,fontSize:`${actualConfig.headerFontSize}px`,color:actualConfig.headerColor }"
    >
      <div
        class="header-item base-scroll-list-text"
        v-for="(headerItem, i) in headerData"
        :key="headerItem + i"
        :style="{width:`${columnWidths[i]}px`,...headerStyleData[i]}"
        v-html="headerItem"
        :align="aligns[i]"
      ></div>
    </div>
    <div
      class="base-scroll-list-rows"
      v-for="(rowData,rowIndex) of rowsData"
      :key="rowIndex"
      :style="{height:`${rowHeights[rowIndex]}px`,backgroundColor:rowIndex %2===0?rowBg[1]:rowBg[0],fontSize:`${actualConfig.rowFontSize}px`,color:actualConfig.rowColor}"
    >
      <div
        class="base-scroll-list-columns"
        v-for="(colData,colIndex) of rowData"
        :key="colIndex"
        :style="{width:`${columnWidths[colIndex]}px`,...rowStyle[colIndex]}"
        :align="aligns[colIndex]"
        v-html="colData"
      ></div>
    </div>
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
    const rowStyle = ref([]);
    const actualConfig = ref({});
    const defaultConfig = {
      header: [],
      headerStyle: [],
      rowStyle: [],
      headerBg: "rgb(90,90,90)",
      headerHeight: 30,
      headerIndex: false,
      headerIndexContent: "#",
      headerIndexStyle: {
        width: "50px",
      },
      rowIndexStyle: {},
      rowBg: [],
      rowNum: 10,
      data: [],
      aligns: [],
      rowFontSize: 20,
      headerFontSize: 24,
      rowColor: "#333",
      headerColor: "#666",
    };
    const columnWidths = ref([]);
    const rowsData = ref([]);
    const rowBg = ref([]);
    const rowHeights = ref([]);
    const rowNum = ref(defaultConfig.rowNum);
    const aligns = ref([]);
    const handleHeader = (config) => {
      const _headerData = cloneDeep(config.header);
      const _headerStyle = cloneDeep(config.headerStyle);
      const _rowsData = cloneDeep(config.data);
      const _rowStyle = cloneDeep(config.rowStyle);
      const _aligns = cloneDeep(config.aligns);
      if (config.header.length === 0) {
        return;
      }
      if (config.headerIndex) {
        _headerData.unshift(config.headerIndexContent);
        _headerStyle.unshift(config.headerIndexStyle);
        _rowStyle.unshift(config.rowIndexStyle);
        _rowsData.forEach((rows, index) => {
          rows.unshift(index + 1);
        });
        _aligns.unshift("center");
      }
      const usedWidth = 0;
      const usedColumNum = 0;
      const avgWidth =
        (width.value - usedWidth) / (_headerData.length - usedColumNum);
      const _columnWidths = new Array(_headerData.length).fill(avgWidth);
      _headerStyle.forEach((style, index) => {
        if (style.width) {
          const headerWidth = +style.width.replace("px", "");
          _columnWidths[index] = headerWidth;
        }
      });

      columnWidths.value = _columnWidths;
      console.log(_columnWidths);
      headerData.value = _headerData;
      headerStyleData.value = _headerStyle;
      rowsData.value = _rowsData;
      rowStyle.value = _rowStyle;
      aligns.value = _aligns;
    };
    const handleRows = (conifg) => {
      const { headerHeight } = config;
      const unusedHeight = height.value - headerHeight;
      rowNum.value = config.rowNum;
      if (rowNum.value > rowsData.value.length) {
        rowNum.value = rowsData.value.length;
      }
      const avgHeight = unusedHeight / rowNum.value;
      rowHeights.value = new Array(rowNum.value).fill(avgHeight);
      console.log(unusedHeight, height, avgHeight);
      if (config.rowBg.length > 0) {
        rowBg.value = config.rowBg;
      }
    };
    onMounted(() => {
      const _actualConfig = assign(defaultConfig, config);
      rowsData.value = _actualConfig.data || [];
      handleHeader(_actualConfig);
      handleRows(_actualConfig);
      actualConfig.value = _actualConfig;
    });
    return {
      id,
      headerData,
      headerStyleData,
      columnWidths,
      rowsData,
      rowHeights,
      rowStyle,
      rowBg,
      aligns,
      actualConfig,
    };
  },
};
</script>

<style lang="scss" scoped>
.base-scroll-list {
  height: 100%;
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
  .base-scroll-list-rows {
    display: flex;
    align-items: center;
    .base-scroll-list-columns {
    }
  }
}
</style>
