<template>
  <div class="f-dir-cc">
    <div class="box1">
      <div class="d-flex">
        <div>
          <div class="word1">订单服务</div>
          <div class="word2">购买指南</div>
          <div class="word2">支付方式</div>
          <div class="word2">送货政策</div>
        </div>
        <div>
          <div class="word1">服务支持</div>
          <div class="word2">官方开源</div>
          <div class="word2">项目前端</div>
          <div class="word2">项目后端</div>
        </div>
        <div>
          <div class="word1">自助服务</div>
          <div class="word2">个人博客</div>
          <div class="word2">个人简介</div>
          <div class="word2">个人视频</div>
        </div>
        <div>
          <div class="word1">其他项目</div>
          <div class="word2">XPay支付系统</div>
          <div class="word2">数据共享</div>
          <div class="word2">待开发...</div>
        </div>
        <div>
          <div class="word1">友情链接</div>
          <div class="word2">宇cccc</div>
          <div class="word2">Smartisan</div>
          <div class="word2">Vue</div>
        </div>
        <div>
          <div class="word1">关注我吧</div>
          <div class="word2">腾讯QQ</div>
          <div class="word2">新浪微博</div>
          <div class="word2">官方邮箱</div>
        </div>
      </div>
      <div class="dv2">
        <div class="word3">1012139570</div>
        <div class="word4">周一至周日 10：00-23：00 (限Starrer或捐赠人联系)</div>
        <div class="hlep">
          <Button type="primary" ghost size="small" class="btn">在线帮助</Button>
        </div>
      </div>
    </div>
    <div class="box2">
      <div class="dv3">
        <div>Copyright 2017, exrick.cn Co., Ltd. All Rights Reserved.本网站设计内容大部分属锤子科技</div>
        <div class="Y-axis"></div>
        <Button type="text" ghost class="word5">法律声明</Button>
        <div class="Y-axis"></div>
        <Button type="text" ghost class="word5">隐私条款</Button>
        <div class="Y-axis"></div>
        <Button type="text" ghost class="word5">开发者中心</Button>
      </div>
      <div>
        <span class="word6">蜀ICP备16030308号-1</span>
        <span class="word6">蜀ICP证16030308号</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  background: white;
  height: 300px;
}
.box1 {
  padding-bottom: 10px;
  width: 1220px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(200, 200, 200);
  margin-top: 40px;
}
.word1 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 25px;
  width: 149px;
}
.word2 {
  font-size: 12px;
  color: #969696;
  margin-bottom: 8px;
  width: 149px;
}
.dv2 {
  width: 240px;
}
.word3 {
  font-size: 30px;
  display: flex;
  justify-content: flex-end;
}
.word4 {
  font-size: 12px;
  color: #969696;
  display: flex;
  justify-content: flex-end;
  white-space: wrap;
}
.hlep {
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
}
.btn {
  border: 1px solid #646464;
}
.box2 {
  width: 1220px;
  padding: 20px 0;
}
.dv3 {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #696969;
}
.Y-axis {
  width: 1px;
  height: 20px;
  border: 1px solid rgb(200, 200, 200);
  margin-left: 10px;
}
.word5 {
  color: rgb(91, 139, 230);
  font-size: 12px;
}
.word6 {
  color: rgb(200, 200, 200);
  font-size: 12px;
  margin-right: 10px;
}
</style>