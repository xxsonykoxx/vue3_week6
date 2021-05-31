<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
/*'M PLUS 1p' */
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@300;400&family=Noto+Sans+JP:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400&family=Raleway:wght@300;400&display=swap');
body,
a,
input {
  font-family: 'Noto Sans JP', 'Raleway', sans-serif;
  // font-weight: 300;
}
input:focus {
  outline: none;
}
html,
body {
  margin: 0 !important;
  padding: 0;
  box-sizing: border-box;
}
</style>
