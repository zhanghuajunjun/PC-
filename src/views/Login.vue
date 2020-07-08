<template>
  <div class="flex-j-c">
    <div class="card">
      <div class="top">
        <div class="left">M</div>
      </div>
      <div class="b-font">使用XMall账号 登录官网</div>
      <div class="marg-bosw">
        <Input v-model="username" size="large" placeholder="账号" :maxlength="maxlength" clearable />
      </div>
      <div class="marg-bosw">
        <Input v-model="password" size="large" placeholder="密码" type="password" password />
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
      <div class="flex-j-sb">
        <Checkbox v-model="single">记住密码</Checkbox>
        <div>
          <a href="/register" class="register">注册Xmall账号</a>
          <span class="forget hover" @click="info(false)">忘记密码?</span>
        </div>
      </div>
      <div class="btn">
        <div v-if="this.username==='' || this.password===''">
          <Button type="primary" disabled class="login" size="large">登录</Button>
        </div>
        <div v-else>
          <Button type="primary" class="login" @click="login" size="large">登录</Button>
        </div>
        <div class="back">
          <Button class="login" size="large" @click="back">返回</Button>
        </div>
      </div>
      <div class="footer">
        <div class="other">其它账号登录：</div>
        <div class="padd-lr hover">
          <Icon type="ios-chatbubbles-outline" size="16" @click="info(false)" />
        </div>
        <div class="hover">
          <Icon type="ios-ribbon-outline" size="16" @click="info(false)" />
        </div>
        <div class="padd-lr hover">
          <Icon type="logo-tux" size="16" @click="info(false)" />
        </div>
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
    info(nodesc) {
      this.$Notice.info({
        title: "待开发",
        desc: nodesc ? "" : "此功能正在开发中..."
      });
    },
    login() {
      this.$api
        .login({
          username: this.username,
          password: this.password
        })
        .then(res => {
          if (res.code === 200) {
            this.$Message.success(res.msg);
            this.$router.push("/");
          } else {
            this.$Message.error(res.msg);
          }
          console.log(res);
        })
        .catch(err => {});
    },
    back() {
      this.$router.push("/");
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
.card {
  margin-top: 50px;
  width: 340px;
  background: rgb(247, 247, 247);
  border-radius: 10px;
  box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2);
  padding: 20px;
}
.top {
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left {
  width: 90px;
  height: 90px;
  background: red;
  border-radius: 45px;
  color: white;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.b-font {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 30px;
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
  padding: 0 10px;
  border-right: 1px solid #ccc;
}
.forget {
  font-size: 14px;
  color: #5079d9;
  padding-left: 10px;
}
.btn {
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}
.login {
  width: 100%;
}
.back {
  margin-top: 15px;
}
.footer {
  display: flex;
  padding-top: 20px;
  font-size: 13px;
  color: #999;
}
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  .ivu-modal {
    top: 0;
  }
}
</style>