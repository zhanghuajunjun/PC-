<template>
  <div>
    <div class="dv">
      <div class="w-box">
        <div class="nav-logo">
          <h1>
            <a href="#/" class="logo">M</a>
          </h1>
        </div>
        <div class="flex-a-c">
          <Input suffix="ios-search" placeholder="请输入商品信息" style="width: auto" class="marg-rew" />
          <div class="padd-lrew">全部商品</div>
          <div class="padd-lrew">捐赠</div>
          <div class="nav-line"></div>
          <div class="nav-right">
            <Icon type="ios-contact" class="contact" @click="goLogin"/>
            <div class="flex-a-c padd-r hovers">
              <Icon type="ios-cart-outline" class="outline" />
              <div class="flex-cent">{{length}}</div>
              <div class="null-cart">
                <Icon type="md-arrow-dropup" class="dropup" />
                <div class="null">
                  <Icon type="ios-cart-outline" class="ios-cart" />
                  <div>你的购物车居然是空的!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-warpper">
      <div class="warpper-box">
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item" @click="goHome">
            <span :class="{'active':isActive}" class="blue">首页</span>
          </div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs" @click="goAll">
          <div class="padd-lrs nav-item blue">全部</div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item blue">品牌周边</div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item blue">捐赠名单</div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item blue">后台管理系统</div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item blue">XPay支付系统</div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item blue">XBoot开发平台</div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item blue">宣传视频</div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item blue">Github</div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item blue">商用授权</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tops",
  props: {},
  data() {
    return {
      length: 0,
      isActive: false
    };
  },
  components: {},
  methods: {
    goAll() {
      this.$router.push("/allGoods");
    },
    goHome() {
      this.$router.push("/");
    },
    goLogin() {
      this.$router.push("/login");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.dv {
  background: black;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
}
.hovers:hover {
  cursor: pointer;
}
.hovers:hover .outline {
  color: #fff;
}
.hovers:hover .null-cart {
  display: block;
}
.null-cart {
  display: none;
  position: absolute;
  top: 60px;
  right: 470px;
  z-index: 999;
}
.ios-cart {
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 70px;
  color: #666;
}
.dropup {
  font-size: 26px;
  color: white;
  position: absolute;
  left: 265px;
}
.null {
  background: white;
  text-align: center;
  width: 320px;
  position: absolute;
  top: 15px;
  border-radius: 10px;
  padding-bottom: 50px;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
}
.w-box {
  width: 1220px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo {
  width: 50px;
  height: 40px;
  display: flex;
  justify-content: center;
}
h1 {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  text-align: center;
}
.logo {
  color: #666;
}
.padd-lrew {
  color: #c8c8c8;
  font-size: 14px;
}
.padd-lrew:hover {
  color: #fff;
  cursor: pointer;
}
.nav-line {
  width: 1px;
  height: 13px;
  background: rgba($color: #ffffff, $alpha: 0.2);
}
.contact {
  font-size: 24px;
  color: #666;
  padding: 0 10px;
  margin-right: 20px;
}
.contact:hover {
  color: #fff;
  cursor: pointer;
}
.outline {
  font-size: 24px;
  color: #666;
}
.flex-cent {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #989898;
  color: #fff;
}
.nav-right {
  width: 160px;
  display: flex;
  justify-content: flex-end;
}
.nav-warpper {
  background: #f7f7f7;
  padding: 31px 0;
  display: flex;
  justify-content: center;
}
.nav-item {
  font-size: 14px;
  color: #666;
}
.Badge {
  width: 2px;
  height: 2px;
  background: #bdbdbd;
}
.warpper-box {
  width: 1220px;
  display: flex;
  align-items: center;
}
.blue:hover {
  cursor: pointer;
  color: #5079d9;
}
</style>