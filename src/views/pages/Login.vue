<template>
  <div class="login-content">
    <p>Login</p>
    <form class="login" @submit.prevent="formsubmit">
      <div class="account-group form-login">
        <label for="email">account</label>
        <input
          type="email"
          id="email"
          placeholder="アカウントを入力してください"
          v-model="user.username"
          required
        />
      </div>
      <div class="password-group  form-login">
        <label for="password">password</label>
        <input
          type="password"
          id="password"
          placeholder="パスワードを入力してください"
          v-model="user.password"
          required
        />
      </div>
      <button>ログイン</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

const api = 'https://vue3-course-api.hexschool.io';

export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    formsubmit() {
      const loginAPI = `${api}/admin/signin`;
      axios
        .post(loginAPI, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token } = res.data;
            const { expired } = res.data;
            document.cookie = `userToken=${token};expires=${new Date(expired)}`;
            alert(`${res.data.message}`);
            this.$router.push('/').then(() => {
              window.location.reload();
            });
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    // console.log(api, path);
  },
};
</script>

<style lang="scss" scoped>
$cherry: #ec7589;
.login-content {
  padding: 30px;
  background: #fff;
  border-left: 1px solid $cherry;
  float: right;
  min-width: 900px;
  color: $cherry;
}
.form-login {
  padding-bottom: 10px;
  label {
    display: block;
    padding-bottom: 5px;
  }
  input {
    color: $cherry;
    padding-left: 5px;
    width: 30%;
    height: 32px;
    border-radius: 3px;
    border: 1px solid $cherry;
    &::placeholder {
      font-size: 12px;
      color: rgb(197, 194, 194);
    }
  }
}
.login {
  button {
    width: 30%;
    margin-top: 15px;
    padding: 8px 0px 8px 0px;
    font-size: 12px;
    background: $cherry;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: lighten($cherry, 5%);
    }
  }
}
</style>
