<template>
  <div class="flex-j-c">
    <div class="card">
      <div class="b-font">注册XMall账号</div>
      <div class="marg-bosw">
        <Input v-model="username" size="large" placeholder="账号" :maxlength="maxlength" clearable />
      </div>
      <div class="marg-bosw">
        <Input v-model="password" size="large" placeholder="密码" type="password" password />
      </div>
      <div class="marg-bosw">
        <Input v-model="passwords" size="large" placeholder="重复密码" type="password" password />
      </div>
      <div class="vpat">
        <div ref="vaptcha" style="width:300px;height:40px">
          <div class="vaptcha-init-main">
            <div class="vaptcha-init-loading">
              <a href="https://www.vaptcha.com/" target="_blank">
                <img src="https://cdn.vaptcha.com/vaptcha-loading.gif" />
              </a>
              <span class="vaptcha-text">VAPTCHA启动中...</span>
            </div>
          </div>
        </div>
      </div>
      <div class="single">
        <Checkbox v-model="single">
          我已阅读并同意遵守
          <a href class="register">法律声明</a>
          和
          <a href class="forget">隐私条款</a>
        </Checkbox>
      </div>
      <div class="btn">
        <div v-if="this.username==='' || this.password==='' || this.passwords===''">
          <Button type="primary" disabled class="login" size="large">注册</Button>
        </div>
        <div v-else>
          <Button type="primary" class="login" @click="register" size="large">注册</Button>
        </div>
      </div>
      <div class="footer">
        如果您已有XMall账号，则可在此
        <a href="/login">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
const extend = function(to, _from) {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
};
export default {
  name: "",
  props: {},
  data() {
    return {
      username: "",
      password: "",
      passwords: "",
      single: false,
      maxlength: 6
    };
  },
  components: {},
  methods: {
    loadV2Script() {
      if (typeof window.vaptcha === "function") {
        //如果已经加载就直接放回
        return Promise.resolve();
      } else {
        return new Promise(resolve => {
          var script = document.createElement("script");
          script.src = "https://v.vaptcha.com/v3.js";
          script.async = true;
          script.onload = script.onreadystatechange = function() {
            if (
              !this.readyState ||
              this.readyState == "loaded" ||
              this.readyState == "complete"
            ) {
              resolve();
              script.onload = script.onreadystatechange = null;
            }
          };
          document.getElementsByTagName("head")[0].appendChild(script);
        });
      }
    },
    register() {
      if (this.single === false) {
        this.$Message.error("您未勾选同意我们的注册协议！");
      } else if (this.password != this.passwords) {
        this.$Message.error("两次输入的密码不一致！");
      } else {
        this.$api
          .register({
            username: this.username,
            password: this.password
          })
          .then(res => {
            if (res.code === 200) {
              this.$Message.success(res.msg);
              this.$router.push("/login");
            } else {
              this.$Message.error(res.msg);
            }
            console.log(res);
          })
          .catch(err => {});
      }
    }
  },
  mounted() {
    var config = extend(
      {
        vid: "5efc030de988dd2fc1b8e91b",
        container: this.$refs.vaptcha,
        style: this.vpStyle
      },
      this.$props
    );
    this.loadV2Script().then(() => {
      window.vaptcha(config).then(obj => {
        this.$emit("input", obj);
        obj.render();
      });
    });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
// .flex-j-c {

// }
.card {
  margin-top: 50px;
  width: 340px;
  background: rgb(247, 247, 247);
  border-radius: 10px;
  box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2);
  padding: 0 20px 20px;
}
.b-font {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  box-sizing: content-box;
  color: rgb(102, 102, 102);
  font-family: PingFang SC, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB,
    Microsoft Yahei, \5fae软雅黑, STHeiti, \534e文细黑, sans-serif;
  font-size: 20px;
  font-weight: 700;
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin: 0 -20px 20px;
}
.vpat {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
}
.vaptcha-init-main {
  display: table;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}
.vaptcha-init-loading {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.vaptcha-init-loading > a {
  display: inline-block;
  width: 18px;
  height: 18px;
}
.vaptcha-init-loading > a img {
  vertical-align: middle;
}
.vaptcha-init-loading .vaptcha-text {
  font-family: sans-serif;
  font-size: 12px;
  color: #cccccc;
  vertical-align: middle;
}
.register {
  font-size: 14px;
  color: #5079d9;
}
.forget {
  font-size: 14px;
  color: #5079d9;
}
.btn {
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}
.login {
  width: 100%;
}
.footer {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  font-size: 13px;
  color: #999;
}
</style>