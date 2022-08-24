<template>
  <div>
    <div class="topBar bg-black py-2 px-3 d-flex ai-center">
      <img src="../assets/logo.png" height="30" />
      <div class="px-2 flex-1">
        <div class="text-white fs-sm">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队合作性游戏</div>
      </div>
      <button type="button" class="btn bg-primary text-dark">立即下载</button>
    </div>
    <div class="nav bg-primary pt-3 pb-2">
      <div class="nav nav-inverse pb-1">
        <div class="nav-item active">
          <router-link class="nav-link" tag="div" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {};
  },
};
</script>

<style></style>
