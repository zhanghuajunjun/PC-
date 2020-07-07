<template>
  <div class="flex-j-c">
    <div class="card">
      <div v-for="item in activity.panelContents" :key="item.id" class="item">
        <div class="li">
          <img :src="item.picUrl" alt class="img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    activity: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      padding: 0
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
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  display: flex;
}
.item {
  width: 25%;
  border-right: 1px solid #eeeeee;
}
.li:hover:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 1px 1px 10px;
  -webkit-box-shadow: 0 0 30px #ccc inset;
  -moz-box-shadow: 0 0 30px #ccc inset;
  -o-box-shadow: 0 0 30px #ccc inset;
}
.li {
  display: inline-block;
  *display: inline;
  position: relative;
}
.img {
  width: 100%;
  &:first-child {
    border-radius: 8px 0 0 8px;
  }
}
</style>