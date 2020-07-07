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
            <Icon type="ios-contact" class="contact" />
            <div class="flex-a-c padd-r">
              <Icon type="ios-cart-outline" class="outline" />
              <div class="flex-cent">{{length}}</div>
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
            <span :class="{'active':isActive}">首页</span>
          </div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs" @click="goAll">
          <div class="padd-lrs nav-item">全部</div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item">品牌周边</div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item">捐赠名单</div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item">后台管理系统</div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item">XPay支付系统</div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item">XBoot开发平台</div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item">宣传视频</div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item">Github</div>
        </div>
        <div class="Badge"></div>
        <div class="padd-lrs">
          <div class="padd-lrs nav-item">商用授权</div>
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
      this.$router.push('/allGoods')
    },
    goHome() {
      this.$router.push('/')
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
</style>