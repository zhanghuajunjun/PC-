<template>
  <div class="flex-j-c">
    <div class="card">
      <div class="flex-j-sb">
        <div v-for="(item,index) in plate.panelContents" :key="index" class="imgs">
          <div v-if="index>0">
            <img :src="item.picUrl" alt height="200px" class="img"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    plate: {
      type: Object,
      default: () => {}
    }
  },
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
.card {
  width: 1220px;
  background: white;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
}
.img {
  margin-right: 100px;
}
.imgs:hover:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 1px 1px 10px;
  -webkit-box-shadow: 0 0 30px #ccc inset;
  -moz-box-shadow: 0 0 30px #ccc inset;
  -o-box-shadow: 0 0 30px #ccc inset;
}
.imgs {
  display: inline-block;
  *display: inline;
  position: relative;
}
</style>