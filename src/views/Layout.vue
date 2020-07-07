<template>
  <div class="dv">
    <div>
      <tops></tops>
    </div>
    <div class="plate">
      <router-view></router-view>
    </div>
    <div class="foots">
      <foots></foots>
    </div>
  </div>
</template>

<script>
import Tops from "../components/layout/Tops";
import Foots from "../components/layout/Foots";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    Tops,
    Foots
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.dv {
  background: #ededed;
}
.plate {
  padding: 20px 0 40px 0;
}
.foots{
  background: white;
}
</style>