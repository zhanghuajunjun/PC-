<template>
  <div class="f-dir-mid">
    <div class="box">
      <Carousel
        :autoplay="autoplay"
        v-model="value"
        loop
        :radius-dot="radiusDot"
        :arrow="arrow"
        :autoplay-speed="autoplaySpeed"
        trigger="click"
      >
        <CarouselItem v-for="item in rotation.panelContents" :key="item.id">
          <div class="demo-carousel">
            <img :src="item.picUrl" alt />
            <img :src="item.picUrl2" alt />
            <img :src="item.picUrl3" alt />
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    rotation: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      value: 0,
      radiusDot: true,
      arrow: 'never',
      autoplaySpeed: 10000,
      autoplay: true
    };
  },
  components: {},
  methods: {},
  mounted() {
    // let el = document.querySelector(".box");

    // el.addEventListener("mousemove", e => {
    //   let thisPX = el.getBoundingClientRect().left;
    //   let thisPY = el.getBoundingClientRect().top;
    //   let boxWidth = el.getBoundingClientRect().width;
    //   let boxHeight = el.getBoundingClientRect().height;

    //   let mouseX = e.pageX - thisPX;
    //   let scrollTop =
    //     document.documentElement.scrollTop + document.body.scrollTop; //计算滚动高度
    //   let mouseY = e.pageY - scrollTop - thisPY; //减去滚动高度

    //   let X;
    //   let Y;

    //   X = mouseX - boxWidth / 2;
    //   Y = boxHeight / 2 - mouseY;

    //   el.style.transform = `perspective(500px) rotateY(${X /
    //     10}deg) rotateX(${Y / 10}deg)`;
    //   el.style.boxShadow = `${-X / 20}px ${Y / 20}px 50px rgba(0, 0, 0, 0.3)`;
    // });

    // el.addEventListener("mouseleave", () => {
    //   el.style.transform = `perspective(500px) rotateY(0deg) rotateX(0deg)`;
    //   el.style.boxShadow = "";
    // });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 1220px;
  height: 500px;
  border-radius: 10px;
}
.demo-carousel {
  width: 1220px;
  height: 500px;
  position: relative;
  transition: all 0.3s linear;
  transform-origin: 50%;
  border-radius: 10px;
}
img {
  border-radius: 10px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>