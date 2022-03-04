<template>
  <div class="login-container">
    <div class="login-box">
      <h3>微信看榜</h3>
      <el-form class="form-data" ref="form" :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="form.username"
            placeholder="请输入用户名"
            ref="username"
            prefix-icon="iconfont iconzhanghao"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="text"
            v-model="form.password"
            placeholder="请输入密码"
            ref="password"
            show-password
            prefix-icon="iconfont iconmima"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="text"
            v-model="form.captcha"
            placeholder="请输入验证码"
            ref="captcha"
            prefix-icon="iconfont iconyanzhengma"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div class="captcha">
            <img src="" alt="" @click="changeCaptcha" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" :loading="false"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      form: {
        username: "",
        password: "",
        captcha: "",
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
      submitLoading: false,
      captchaUrl: "",
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
    changeCaptcha() {},
  },
  mounted() {
    if (this.form.username === "") {
      this.$refs.username.focus();
    } else if (this.form.password === "") {
      this.$refs.password.focus();
    } else if (this.form.captcha === "") {
      this.$refs.captcha.focus();
    }
  },
};
</script>
<style lang="scss">
.el-input--medium .el-input__inner {
  height: 40px;
  line-height: 40px;
  border: 0;
  border-bottom: 1px solid #ddd;
  border-radius: 0;
}
</style>
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";

.login-container {
  width: 100%;
  min-height: 100vh;
  background: url("../../assets/image/loginBg.png") no-repeat;
  text-align: center;
  overflow: hidden;
  .login-box {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    background-color: $color-white;
    border-radius: 5px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 100px;

    h3 {
      margin: 40px 0 20px;
      font-size: 20px;
      font-weight: 500;
      color: $color-orange;
      text-align: left;
    }

    .captcha {
      width: 100%;
      height: 80px;
      background-color: skyblue;
    }

    .el-button {
      width: 100%;
      height: 42px;
      background-color: $color-orange;
      border: 0;
      font-size: 18px;
      margin-top: 20px;
    }
  }
}
</style>
