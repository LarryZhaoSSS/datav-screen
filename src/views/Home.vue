<template>
  <div class="home">
    <container :options="{width:3840,height:2160}">
      <div class="test">1111</div>
    </container>
  </div>
</template>

<script>
// @ is an alias to /src
import Container from "@/components/container/Container";
export default {
  components: {
    Container
  }
};
</script>
<style lang="scss" scoped>
.test {
  font-size: 140px;
  color: red;
}
</style>