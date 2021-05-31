<template>
  <header>
    <router-link to="/Products">
      <img
        src="../../public/image/bear.png"
        alt="bear-image"
        class="bear_icon"
      />
      オンラインストア</router-link
    >
    <template v-if="token">
      <h3 @click="logout">
        <img
          src="../../public/image/bear1.png"
          alt="bear-image"
          class="bear_icon"
        />
        ログアウト
      </h3>
    </template>
    <template v-else>
      <router-link to="/Login">
        <img
          src="../../public/image/bear1.png"
          alt="bear-image"
          class="bear_icon"
        />
        ログイン</router-link
      >
    </template>
    <template v-if="token">
      <router-link to="/AdminProducts">
        <img
          src="../../public/image/bear1.png"
          alt="bear-image"
          class="bear_icon"
        />
        Dashboard</router-link
      >
    </template>
  </header>
</template>

<script>
export default {
  data() {
    return {
      token: '',
    };
  },
  methods: {
    logout() {
      document.cookie = 'userToken=; expires=; path=/';
      this.$router.push('/');
      window.location.reload();
    },
  },
  created() {
    this.token = document.cookie.replace(
      // eslint-disable-next-line no-useless-escape
      /(?:(?:^|.*;\s*)userToken\s*\=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
  },
};
</script>

<style lang="scss" scoped>
$cherry: #ec7589;
$gray: rgb(146, 146, 146);
*,
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
header {
  min-width: 295px;
  min-height: 800px;
  padding: 20px;
  float: left;
  background-color: #fff;
  a,
  h3 {
    text-decoration: none;
    display: block;
    color: $cherry;
    padding-bottom: 20px;
    font-size: 16px;
    cursor: pointer;
    .bear_icon {
      width: 30px;
    }
    img {
      padding-right: 5px;
    }
  }
}
</style>
