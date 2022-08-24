import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 配置全局样式，进行全局样式重置
import "./assets/css/index.scss";

// 引入字体图标样式
import "./assets/iconfont/iconfont.css";

// 全局引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
//引入样式
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
