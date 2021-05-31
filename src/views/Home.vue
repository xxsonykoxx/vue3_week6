<template>
  <div class="home">
    <Header></Header>
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
$cherry: #ec7589;
* {
  box-sizing: border-box;
}
body {
  background: url(https://www.otomate.jp/home/img/bg.jpg);
  border-top: 4px solid rgb(236, 117, 137);
}
.home {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  border-left: 1px solid $cherry;
}
</style>
