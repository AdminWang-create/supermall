<template>
    <div id="home">
        <NavBar class="home-nav">
             <div slot="center">购物街</div>
        </NavBar>
        <home-swiper :banners="banners"></home-swiper>
        <h2>首页</h2>
    </div>
</template>

<script>
    import NavBar from "../../components/common/nevbar/NavBar";
    import {getHomeMultiData} from "../../network/home";
    import HomeSwiper from "./childComps/HomeSwiper";

    export default {
        name: "Home",
        components:{
            NavBar,
            HomeSwiper
        },
        data(){
            return{
                //保存网络请求的数据
                banners: [],
                recommends: []
            }
        },
        created(){
            //1.请求多个数据
            getHomeMultiData().then(res => {
                // console.log(res);

                //把网络请求的数据保存到result中
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            })
        }
    }
</script>

<style scoped>
    @import '../../assets/css/navigation.css';
    .home-nav{
        background-color: #dc6a7d;
        color:white;
    }
</style>