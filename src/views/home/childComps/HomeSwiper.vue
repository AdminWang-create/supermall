<template>
    <!--        轮播图组件-->
    <swiper>
        <swiper-item v-for="item in banners">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
    export default {
        name: "HomeSwiper",
        components:{
            SwiperItem,
            Swiper
        },
        props:{
            banners: {
                type: Array,
                default() {
                    return []
                }
            }

        }
    }
</script>

<style scoped>

</style>