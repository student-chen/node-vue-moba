<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/周年庆.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/周年庆.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/周年庆.png" />
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-2"
        slot="pagination"
      ></div>
    </swiper>
    <!-- swiper end -->

    <div class="nav-icons bg-white mt-3 pt-3 text-center text-grey-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="item in 10" :key="item">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm d-flex jc-center ai-center">
        <i class="sprite sprite-sq"></i>
        <div>收起</div>
      </div>
    </div>
    <!-- nav end  -->

    <!-- <i class="iconfont icon-cc-menu-circle fs-xxl text-primary"></i> -->
    <div class="card p-3 bg-white mt-3">
      <div class="card-header d-flex ai-center">
        <i class="iconfont icon-cc-menu-circle"></i>
        <div class="fs-xl flex-1 px-2">新闻资讯</div>
        <i class="iconfont icon-menu"></i>
      </div>
      <div class="card-body">
        <div class="nav">
          <div class="nav-item active">
            <div class="nav-link">热门</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">新闻</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import "swiper/dist/css/swiper.css";
// import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Home",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home",
        },
      },
    };
  },
  //   components: {
  //     swiper,
  //     swiperSlide,
  //   },
};
</script>

<style lang="scss">
@import "../assets/css/index.scss";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.125rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, info);
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
