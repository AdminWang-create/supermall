<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tab-bar-item link="/Home">
        <img src="./assets/img/tabbar/home.svg" slot="item-icon">
        <img src="./assets/img/tabbar/home_active.svg" slot="item-isActive">
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item link="/category">
        <img src="./assets/img/tabbar/category.svg" slot="item-icon">
        <img src="./assets/img/tabbar/category_active.svg" slot="item-isActive">
        <div slot="item-text">分类</div>
      </tab-bar-item>

      <tab-bar-item link="/Cart">
        <img src="./assets/img/tabbar/cart.svg" slot="item-icon">
        <img src="./assets/img/tabbar/cart_active.svg" slot="item-isActive">
        <div slot="item-text">购物车</div>
      </tab-bar-item>

      <tab-bar-item link="/Profile">
        <img src="./assets/img/tabbar/profile.svg" slot="item-icon">
        <img src="./assets/img/tabbar/profile_active.svg" slot="item-isActive">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tabbar>
  </div>
</template>

<script>
  import Tabbar from "./components/common/Tabbar";
  import TabBarItem from "./components/common/TabBarItem";

export default {
  name: 'App',
  components:{
    Tabbar,
    TabBarItem
  }
}
</script>

<style>
  @import "assets/css/base.css";
  @import "assets/css/Tabbar.css";
</style>
