<template>
  <div class="home">
    <i-loading v-if="loading">
      <div class="loading-text">数据大屏加载中...</div>
    </i-loading>
    <container :options="{width:3840,height:2160}" v-else>
      <div class="header">
        <top-header></top-header>
      </div>
      <div class="separator"></div>
      <div class="center">
        <div class="left">
          <div class="left1">left1</div>
          <div class="left2">left2</div>
          <div class="left3">left3</div>
          <div class="left4">left4</div>
          <div class="left5">left5</div>
          <div class="left6">left6</div>
        </div>
        <div class="right">
          <div class="right-top1">top1</div>
          <div class="right-top2">top2</div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">right-left1</div>
              <div class="right-left2">right-left2</div>
              <div class="right-left3">right-left3</div>
              <div class="right-left4">right-left4</div>
            </div>
            <div class="right-right">
              <div class="right-right1">right-right1</div>
              <div class="right-right2">right-right1</div>
            </div>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ILoading from "@/components/loading/Loading";
import Container from "@/components/container/Container";
import TopHeader from "@/components/top-header/top-header";
export default {
  components: {
    ILoading,
    Container,
    TopHeader
  },
  setup() {
    const loading = ref(true);
    onMounted(() => {
      setTimeout(() => {
        loading.value = false;
      }, 1000);
    });
    return {
      loading
    };
  }
};
</script>
<style lang='scss'>
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(29, 29, 29);
  color: #fff;
  font-size: 48px;
  #imooc-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .header {
      width: 100%;
      height: 167px;
      background: yellow;
    }
    .separator {
      width: 100%;
      height: 10px;
      background: #000;
    }
    .center {
      width: 100%;
      flex: 1;
      background: rebeccapurple;
      display: flex;
      .left {
        flex: 0 0 860px;
        background: red;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 860px;
        height: 100%;
        padding-bottom: 20px;
        box-sizing: border-box;
        .left1 {
          height: 300px;
          background: green;
        }
        .left2 {
          height: 320px;
          background: yellowgreen;
        }
        .left3 {
          height: 280px;
          background: blueviolet;
        }
        .left4 {
          height: 230px;
          background: mediumpurple;
        }
        .left5 {
          height: 360px;
          background: pink;
        }
        .left6 {
          height: 360px;
          background: darkred;
        }
      }
      .right {
        flex: 1;
        background: blue;
        display: flex;
        flex-direction: column;
        .right-top1 {
          width: 100%;
          height: 206px;
          background: darkred;
        }
        .right-top2 {
          width: 100%;
          height: 48px;
          background: cadetblue;
        }
        .right-bottom {
          flex: 1;
          display: flex;
          padding-bottom: 20px;
          .right-left {
            flex: 0 0 1917px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 1917px;
            .right-left1 {
              height: 999px;
              background: red;
            }
            .right-left2 {
              height: 80px;
              background: green;
            }
            .right-left3 {
              height: 350px;
              background: deepskyblue;
            }
            .right-left4 {
              height: 220px;
              background: darkred;
            }
          }
          .right-right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;
            width: 100%;
            .right-right1 {
              height: 999px;
              width: 100%;
              background: burlywood;
            }
            .right-right2 {
              flex: 1;
              margin-top: 20px;
              width: 100%;
              background: darkred;
            }
          }
        }
      }
    }
  }

  .loading-text {
    font-size: 20px;
    margin-top: 10px;
  }
}
</style>
<style lang="scss" scoped>
</style>