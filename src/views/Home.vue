<template>
  <div class="dv">
    <div class="tops">
      <Rotation :rotation="rotation"></Rotation>
    </div>
    <div class="marg">
      <Activity :activity="activity"></Activity>
    </div>
    <div>
      <HotGoods :hotGoods="hotGoods"></HotGoods>
    </div>
    <div class="marg">
      <selected :selected="selected"></selected>
    </div>
    <div>
      <periphery :periphery="periphery"></periphery>
    </div>
    <div class="marg">
      <brand :brand="brand"></brand>
    </div>
    <div>
      <plate :plate="plate"></plate>
    </div>
  </div>
</template>

<script>
import Rotation from "../components/home/Rotation";
import Activity from "../components/home/Activity";
import HotGoods from "../components/home/HotGoods";
import Selected from "../components/home/Selected";
import Periphery from "../components/home/Periphery";
import Brand from "../components/home/Brand";
import Plate from "../components/home/Plate";
export default {
  name: "",
  props: {},
  data() {
    return {
      rotation: {},
      activity: {},
      hotGoods: {},
      selected: {},
      periphery: {},
      brand: {},
      plate: {},
    };
  },
  components: {
    
    Rotation,
    Activity,
    HotGoods,
    Selected,
    Periphery,
    Brand,
    Plate,
  },
  methods: {},
  mounted() {
    this.$api
      .home()
      .then(res => {
        this.rotation = res.data[0];
        this.activity = res.data[1];
        this.hotGoods = res.data[2];
        this.selected = res.data[3];
        this.periphery = res.data[4];
        this.brand = res.data[5];
        this.plate = res.data[6];
        console.log(res);
      })
      .catch(err => {});
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.dv {
  background: #ededed;
}
.tops {
  box-shadow: 2px 4px 5px #000000;
  margin-bottom: 20px;
}
.marg {
  margin: 20px 0;
}

</style>
