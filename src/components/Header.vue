<script setup>
import {ref} from "vue";

let logo=ref("https://demo-minio.playedu.xyz/playedu/images/fsAsiOKacZweJLVswCucenLPWm8qoMZE.png");
</script>

<template>
<div id="header-page">
  <div class="header">
    <div class="logo">
      <img :src="logo" alt=""/>
    </div>
  </div>
</div>
</template>

<style scoped>
#header-page{
  width: 100%;
  height: 70px;
  background-color: #fff;
  position:sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 1px 4px rgb(0 0 0 / 10%);
  .header{
    width: 100%;
    height: 70px;
    line-height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    .logo{
      width: 124px;
      height: 40px;
      margin-left: 15%;
      img{
        width: 100%;
        overflow-clip-margin: content-box;
        overflow: clip;
      }
    }
  }

}
</style>