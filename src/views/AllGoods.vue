<template>
  <div class="flex-j-c">
    <div class="box">
      <div class="padd">
        <div class="padd-lrs">综合排序</div>
        <div class="padd-lrs">价格从低到高</div>
        <div class="padd-lrs">价格从高到低</div>
        <div class="padd-lrs">
          <input class="input" type="number" placeholder="价格" />
          <span>-</span>
          <input class="input" type="number" placeholder="价格" />
        </div>
        <Button type="primary" size="small" class="ipt">确 认</Button>
      </div>
      <Page :total="40" size="small" show-elevator show-sizer show-total />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
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
</style>