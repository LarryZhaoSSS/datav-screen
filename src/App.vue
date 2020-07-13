<template>
  <div id="app">
    <div class="test">
      <svg width="100px" height="100px" viewBox="0 0 100 100">
        <circle r="15" cx="20" cy="25" fill="white" stroke="red" />
        <circle r="4" cx="20" cy="25" fill="red" />
        <circle r="15" cx="75" cy="25" fill="white" stroke="red" />
        <circle r="4" cx="75" cy="25" fill="red" />
        <circle r="5" cx="20" cy="75" fill="currentColor" />
      </svg>
    </div>
    <div class="container">
      <svg width="440" height="440" viewBox="0 0 440 440">
        <circle cx="220" cy="220" r="200" stroke-width="20" stroke="#d1d3d7" fill="transparent" />
        <circle
          class="circle"
          cx="220"
          cy="220"
          r="200"
          stroke-width="20"
          stroke="#00a5e0"
          fill="transparent"
          transform="matrix(0 -1 1 0 0 440)"
        />
      </svg>
    </div>
    <div class="container">
      <svg class="icon" viewBox="0 0 1024 1024" width="200" height="200">
        <path
          class="logo"
          d="M870.4 117.76h-716.8A148.6848 148.6848 0 0 0 5.12 266.24v122.88a25.6 25.6 0 0 0 51.2 0v-122.88A97.4848 97.4848 0 0 1 153.6 168.96h716.8A97.4848 97.4848 0 0 1 967.68 266.24v122.88a25.6 25.6 0 0 0 51.2 0v-122.88a148.6848 148.6848 0 0 0-148.48-148.48zM993.28 609.28A25.6 25.6 0 0 0 967.68 634.88v122.88a97.4848 97.4848 0 0 1-97.28 97.28h-716.8A97.4848 97.4848 0 0 1 56.32 757.76v-122.88a25.6 25.6 0 0 0-51.2 0v122.88a148.6848 148.6848 0 0 0 148.48 148.48h716.8A148.6848 148.6848 0 0 0 1018.88 757.76v-122.88a25.6 25.6 0 0 0-25.6-25.6z"
          p-id="1202"
        />
        <path
          d="M271.36 655.36V368.64a25.6 25.6 0 0 0-51.2 0v286.72a25.6 25.6 0 0 0 51.2 0zM537.6 655.36V368.64a25.6 25.6 0 0 0-51.2 0v286.72a25.6 25.6 0 0 0 51.2 0zM803.84 655.36V368.64a25.6 25.6 0 0 0-51.2 0v286.72a25.6 25.6 0 0 0 51.2 0z"
          p-id="1203"
        />
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="100" height="50">
          <set attributeName="x" attributeType="XML" to="10" />
        </rect>
      </svg>
    </div>
    <div class="container">
      <loading :height="300" :width="300">
        <div>内容加载中...</div>
      </loading>
    </div>
    <div class="container">
      <fly-box />
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import { reactive, computed, onMounted } from "vue";
import Loading from "@/components/loading/Loading";
import FlyBox from "@/components/fly-box/FlyBox";
export default {
  components: {
    Loading,
    FlyBox
  },
  setup() {
    onMounted(() => {
      const logo = document.getElementsByClassName("logo")[0];
      console.log(logo.getTotalLength());
    });
  }
};
</script>
<style lang="scss" scoped>
.test {
  color: green;
}
.circle {
  stroke-dasharray: 10 1251;
  animation: circle 5s infinite;
}
@keyframes circle {
  from {
    stroke-dasharray: 0 1257;
  }
  to {
    stroke-dasharray: 1257 0;
  }
}
.logo {
  fill: none;
  stroke: #333;
  stroke-width: 10px;
  animation: logo 5s linear forwards;
}
@keyframes logo {
  0% {
    fill: white;
    stroke-dasharray: 5716;
    stroke-dashoffset: 5716;
  }
  50% {
    stroke-dasharray: 5716;
    stroke-dashoffset: 0;
  }
  75% {
    fill: red;
  }
  100% {
    fill: blue;
  }
}
</style>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
