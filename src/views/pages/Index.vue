<template>
  <div class="home-content">
    <p class="home-infos-title">阿喵指南</p>
    <template v-if="token">
      <p class="home-infos">ログアウト logout</p>
    </template>
    <p class="home-infos" v-else>ログイン login</p>
    <p class="home-infos">オンラインストア onlinestore 前台</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.token = document.cookie.replace(
      // eslint-disable-next-line no-useless-escape
      /(?:(?:^|.*;\s*)userToken\s*\=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    console.log(this.token);
  },
};
</script>

<style lang="scss" scoped>
$cherry: #ec7589;
.home-content {
  padding: 30px;
  background: #fff;
  border-left: 1px solid $cherry;
  float: right;
  min-width: 900px;
  color: $cherry;
}
.home-infos-title {
  padding-bottom: 10px;
}
.home-infos {
  font-size: 14px;
}
</style>
