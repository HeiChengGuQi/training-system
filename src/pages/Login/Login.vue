<script setup>
import {ref} from "vue";

let logo=ref("https://demo-minio.playedu.xyz/playedu/images/fsAsiOKacZweJLVswCucenLPWm8qoMZE.png");
let loginPage="https://demo.playedu.xyz/assets/banner-ef68003c.png";
const username=ref();
const password=ref();
</script>

<template>
<div id="page">
  <div class="header">
    <div class="logo"><img :src="logo" alt="失败的LOGO"/>
    </div>
  </div>
  <div class="main">
    <div class="login">
    <div class="login-title">
      <div class="login-title-text">学员登录</div>
    </div>
      <div class="login-main">
        <div class="login-image">
          <img :src="loginPage" alt="<UNK"/>
        </div>
        <div class="login-form">
          <div class="username"><el-input  class="login-username"
                                           v-model="username"
                                           placeholder="请输入邮箱或者UID"
                                          /></div>
          <div class="password"><el-input class="login-password"
                                          v-model="password"
                                          type="password"
                                          placeholder="请输入密码"
                                          show-password
                                         /></div>
          <div class="submit">
            <el-button class="login-submit">立即登录</el-button>
          </div>

        </div>
        <div class="footer">

        </div>
      </div>
    </div>
  </div>
  <!--
  这是一个后端核心代码需要编写注释进行解析
  此div的样式会被隐藏
  隐藏的是form表单我们遵循Result风格的请求规范所以会发送一个PUT请求
  -->
  <div style="display:none">

  </div>
</div>
</template>

<style scoped>
#page{
  width: 100%;
  height: 900px;
}
.header{
  width: 100%;
  height: 70px;
  line-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #f6f6f6;
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
.main{
  width: 100%;
  float: left;
  height: 100vh;
  background: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
.login{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .login-title{
    min-width: 125px;
    height: auto;
    margin: 100px auto 0;
  }
  .login-title-text{
    width: 120px;
    height: 38px;
    border-bottom: 4px solid #ff4d4f;
    font-weight: 600;
    color: #333;
    font-size: 30px;
    line-height: 30px;
  }
}
.login-main{
  width: 1200px;
  height: 366px;
  display: flex;
  margin: 80px auto 0;
  .login-image{
    width: 595px;
    height: 100%;
    padding: 33px 60px;
    box-sizing: border-box;
    img{
      width: 475px;
      height: 300px;
    }
  }
 .login-form{
   width: 520px;
   height: 100%;
   box-sizing: border-box;
   border-left: 1px solid #d8d8d8;
   padding: 50px 60px;
   display: flex;
   flex-direction: column;
   .username{
     flex: 1;
   }
   .password{
     flex: 1;
   }
   .submit{
     flex: 1;
   }
   .login-username{
     width: 400px;
     height: 54px;
     font-size: 18px !important;
     font-weight: 400;

   }
   .login-password{
     width: 400px;
     height: 54px;
     font-size: 18px !important;
     font-weight: 400;

   }
   .login-submit{
     width: 400px;
     height: 54px;
     font-size: 18px !important;
     font-weight: 400;
     color: #fff;
     background-color: #ff4d4f;
   }
 }

}


</style>