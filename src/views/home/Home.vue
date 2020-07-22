<template>
    <div id="home">

        <h2 @click="clear" class="text-clear">清除错误</h2>
        <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>

        <scroll class="content">
            <home-swiper :banners="banners" ></home-swiper>
            <HomeRecommendView :recommend-view="recommends"></HomeRecommendView>
            <feature></feature>
            <tab-control :titles="titles" class="tab-control" @tabClick="Click"></tab-control>
            <goods-list :goods="goods[currentIndex].list"></goods-list>
        </scroll>
    </div>
</template>

<script>
    /**
    * 导入的文件按空格区分清楚，方便查找
    * */
    import HomeSwiper from "./childComps/HomeSwiper";
    import HomeRecommendView from "./childComps/HomeRecommendView";
    import Feature from "./childComps/HomeFeature";

     /**
      * 公共组件
      * */
    import NavBar from "../../components/common/nevbar/NavBar";
    import TabControl from "../../components/content/tabControl/TabControl";
    import GoodsList from "../../components/content/goods/GoodsList";
    import Scroll from "../../components/common/scroll/Scroll";

    /**
     * //网络组件// 如果没有用default导出，就必须用大括号导入，注册组件的顺序最好也保持一致
     * */
    import {getHomeMultiData,getHomeGoods} from "../../network/home";

    export default {
        name: "Home",
        components:{
            HomeSwiper,
            HomeRecommendView,
            Feature,
            NavBar,
            TabControl,
            GoodsList,
            Scroll
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
                },
                currentIndex: 'pop'
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
        methods:{
            /**
            * 子传父$emit事件监听方法  tabClick是传过来的 Click是自定义的方法
            * */
            Click(index){

                switch (index) {
                    case 0:
                        this.currentIndex = 'pop'
                        console.log('pop：'+index);
                        break
                    case 1:
                        this.currentIndex = 'new'
                        console.log('new：'+index);
                        break
                    case 2:
                        this.currentIndex = 'sell'
                        console.log('sell：'+index);
                        break
                    default:
                        console.clear()
                }
            },
            clear(){
                console.clear()
            },

           /**
            *   网络请求相关的方法
            **/
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
            },

            top(){

                console.log('回到顶部');
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
    .text-clear{
        position: absolute;
        z-index: 1;
        color: red;
        font-size: 50px;
    }
    .content{
        position: absolute;
        top: 44px;
        bottom: 49px;
    }
</style>