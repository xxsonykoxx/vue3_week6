<template>
  <footer>
    <p>footer でございます m(_ _)m</p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$cherry: #ec7589;
$gray: rgb(146, 146, 146);
* {
  box-sizing: border-box;
}
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 100px;
  background-color: $cherry;
  font-size: 12px;
  text-align: center;
  color: #fff;
}
</style>
