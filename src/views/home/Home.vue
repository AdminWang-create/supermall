<template>
    <div id="home">
        <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
        <home-swiper :banners="banners" ></home-swiper>
        <HomeRecommendView :recommend-view="recommends"></HomeRecommendView>
        <feature></feature>
        <tab-control :titles="titles" class="tab-control"></tab-control>
        <goods-list :goods="goods['pop'].list"></goods-list>
        <button @click=""></button>
    </div>
</template>

<script>
    /// 导入的文件按空格区分清楚，方便查找
    import HomeSwiper from "./childComps/HomeSwiper";
    import HomeRecommendView from "./childComps/HomeRecommendView";
    import Feature from "./childComps/HomeFeature";

    // 公共组件
    import NavBar from "../../components/common/nevbar/NavBar";
    import TabControl from "../../components/content/tabControl/TabControl";
    import GoodsList from "../../components/content/goods/GoodsList";

    //网络组件// 如果没有用default导出，就必须用大括号导入，注册组件的顺序最好也保持一致
    import {getHomeMultiData,getHomeGoods} from "../../network/home";

    export default {
        name: "Home",
        components:{
            HomeSwiper,
            HomeRecommendView,
            Feature,
            NavBar,
            TabControl,
            GoodsList
        },
        data(){
            return{
                //保存网络请求的数据
                banners: [],
                recommends: [],
                titles:['流行','新款','精选'],
                goods:{
                    'pop':{page: 0, list: []},
                    'new':{page: 0, list: []},
                    'sell':{page: 0, list: []},
                }
            }
        },
        created(){
            //1.请求多个数据
            this.getHomeMultiData()

            // 请求商品数据
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },
        methods:{       //网络请求方法
            getHomeMultiData(){
                getHomeMultiData().then(res => {
                    // console.log(res);

                    //把网络请求的数据保存到result中
                    this.banners = res.data.banner.list
                    this.recommends = res.data.recommend.list
                })
            },
            getHomeGoods(type){
                let page = this.goods[type].page + 1
                getHomeGoods(type,page).then(res => {
                    this.goods[type].list.push(...res.data.list) //把请求到的list放到数据数组里
                    this.goods[type].page += 1
                })
            }
        }
    }
</script>

<style scoped>
    @import '../../assets/css/navigation.css';

    .home-nav{
        background-color: rgba(220, 106, 125, 0.99);
        color:white;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    #home{
        padding: 44px 0px 80px;
    }
    .tab-control{           /*组件到某个点后固定位置*/
        position: sticky;
        top: 44px;
    }
</style>