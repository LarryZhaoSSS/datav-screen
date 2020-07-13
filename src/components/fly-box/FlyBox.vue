<template>
  <div class="fly-box" :ref="refName">
    <svg :width="width" :height="height">
      <defs>
        <path id="fly-box-path" :d="path" fill="none" />
        <radialGradient id="radial-gradient" cx="50%" cy="50%" fx="100%" fy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <mask id="fly-box-mask">
          <circle :r="starLength" cx="0" cy="0" fill="url(#radial-gradient)">
            <animateMotion dur="3s" :path="path" rotate="auto" repeatCount="indefinite" />
          </circle>
        </mask>
      </defs>
      <use href="#fly-box-path" stroke-width="1" :stroke="lineColor" />
      <use href="#fly-box-path" stroke-width="3" :stroke="starColor" mask="url(#fly-box-mask)" />
    </svg>
    <div class="fly-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance, computed } from "vue";
export default {
  name: "fly-box",
  props: {
    lineColor: {
      type: String,
      default: "#235fa7"
    },
    starColor: {
      type: String,
      default: "#4fd2dd"
    },
    starLength: {
      type: [String, Number],
      default: 50
    }
  },
  setup(ctx) {
    const width = ref(0);
    const height = ref(0);
    const refName = "fly-box";
    const path = computed(
      () =>
        `M5 5 L${width.value - 5} 5 L${width.value - 5} ${height.value -
          5} L5 ${height.value - 5} Z`
    );
    const init = () => {
      const instance = getCurrentInstance();
      const dom = instance.ctx.$refs[refName];
      console.log(dom);
      width.value = dom.clientWidth;
      height.value = dom.clientHeight;
      console.log(dom.clientWidth, dom.clientHeight);
    };
    onMounted(() => {
      init();
    });
    return {
      width,
      height,
      refName,
      path
    };
  }
};
</script>

<style lang="scss" scoped>
.fly-box {
  position: relative;
  width: 100%;
  height: 100%;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .fly-box-content {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
}
</style>
