<template>
  <div class="flex-j-c">
    <div class="box">
      <div class="padd">
        <div class="padd-lrs" :class="{'active':isActive1}" @click="isActive1=true">综合排序</div>
        <div class="padd-lrs" :class="{'active':isActive2}" @click="low">价格从低到高</div>
        <div class="padd-lrs" :class="{'active':isActive3}" @click="high">价格从高到低</div>
        <div class="padd-lrs">
          <input class="input" type="number" placeholder="价格" v-model="priceGt" />
          <span>-</span>
          <input class="input" type="number" placeholder="价格" v-model="priceLte" />
        </div>
        <Button type="primary" size="small" class="ipt" @click="ok">确 认</Button>
      </div>
      <div class="huanh">
        <div v-for="(item,index) in dataList" :key="index" class="item">
          <div class="img">
            <div class="flex-cent">
              <img :src="item.productImageBig" alt width="206px" />
            </div>
            <h6>{{item.productName}}</h6>
            <h5 class="subTitle wh-text-over">{{item.subTitle}}</h5>
            <p class="price">￥{{item.salePrice}}</p>
            <p class="btn1">
              <Button size="small" class="btn">查看详情</Button>
              <Button type="primary" size="small" class="but">加入购物车</Button>
            </p>
          </div>
        </div>
      </div>
      <div class="Page">
        <Page
          :total="Number(total)"
          size="small"
          show-sizer
          show-total
          @on-change="change"
          @on-page-size-change="changepage"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      isActive1: true,
      isActive2: false,
      isActive3: false,
      page: 1,
      size: 10,
      total: "",
      dataList: [],
      priceGt: "",
      priceLte: ""
    };
  },
  components: {},
  methods: {
    change(val) {
      this.page = val;
      this.getData();
    },
    changepage(val) {
      this.size = val;
      this.getData();
    },
    low() {
      (this.isActive1 = false),
        (this.isActive2 = true),
        (this.isActive3 = false),
        this.$api
          .allGoodsort({
            page: this.page,
            size: this.size,
            sort: 1
          })
          .then(res => {
            this.dataList = res.data;
          })
          .catch(err => {});
    },
    high() {
      (this.isActive1 = false),
        (this.isActive2 = false),
        (this.isActive3 = true),
        this.$api
          .allGoodsort({
            page: this.page,
            size: this.size,
            sort: -1
          })
          .then(res => {
            this.dataList = res.data;
          })
          .catch(err => {});
    },
    ok() {
      this.$api
        .allGoods({
          page: this.page,
          size: this.size,
          sort: -1,
          priceGt: Number(this.priceGt),
          priceLte: Number(this.priceLte)
        })
        .then(res => {
          this.dataList = res.data;
        })
        .catch(err => {});
    },
    getData() {
      this.$api
        .allGood({
          page: this.page,
          size: this.size
        })
        .then(res => {
          this.total = res.total;
          this.dataList = res.data;
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 1220px;
}
.padd {
  padding-bottom: 10px;
  display: flex;
  align-items: center;
}
.padd-lrs {
  font-size: 12px;
  color: #999;
}
.input {
  border: 1px solid #ccc;
  text-align: center;
  background: none;
  border-radius: 5px;
  width: 80px;
  height: 25px;
  font-size: 12px;
}
.ipt {
  font-size: 12px;
  padding: 0 10px;
}
.huanh {
  width: 1220px;
  display: flex;
  flex-wrap: wrap;
}
.item {
  background: white;
  text-align: center;
}
.img {
  width: 305px;
  padding-bottom: 50px;
  border: 1px solid #eeeeee;
}
.img:hover {
  cursor: pointer;
  transform: translateY(-3px);
  box-shadow: 2px 2px 10px;
  transition: all 1s;
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
.active {
  color: #7969d9;
}
.Page {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>