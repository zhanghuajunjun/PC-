<template>
  <div class="flex-j-c">
    <div class="card">
      <div class="name">热门商品</div>
      <div class="d-flex">
        <div v-for="item in hotGoods.panelContents" :key="item.id" class="item">
          <div class="flex-cent">
            <img :src="item.picUrl" alt width="206px" />
          </div>
          <h6>{{item.productName}}</h6>
          <h5 class="subTitle">{{item.subTitle}}</h5>
          <p class="price">￥{{item.salePrice}}.00</p>
          <p class="btn1">
            <Button size="small" class="btn">查看详情</Button>
            <Button type="primary" size="small" class="but">加入购物车</Button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    hotGoods: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      padding: 0,
      flag: true
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.card {
  width: 1220px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
}
.name {
  font-size: 18px;
  color: #626262;
  padding: 15px 10px 15px 24px;
  background: #f5f5f5;
  border-bottom: 1px solid #d4d4d4;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
  background: linear-gradient(#fbfbfb, #ececec);
}
.d-flex {
  background: white;
  border-radius:  0 0 8px 8px;
}
.item {
  width: 50%;
  background: white;
  text-align: center;
}
.item:hover {
  cursor: pointer;
  transform: translateY(-3px);
  box-shadow: 2px 2px 10px #000;
  transition: all 1s;
  z-index: 99;
}
img {
  margin-top: 50px;
  margin-bottom: 10px;
}
h6 {
  font-size: 16px;
  color: #424242;
  font-weight: 500;
}
.subTitle {
  color: #d0d0d0;
  font-weight: 500;
  padding: 10px;
}
p {
  font-size: 18px;
  color: #d44d44;
  margin-top: 10px;
  margin-bottom: 50px;
}
.but {
  font-size: 12px;
}
.btn {
  margin-right: 10px;
  font-size: 12px;
}
.btn1 {
  display: none;
}
.item:hover .btn1 {
  display: block;
}
.item:hover .price {
  display: none;
}
</style>