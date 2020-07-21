<template>
    <div class="tab-bar-item" @click="itemClick">
        <!--        插槽再包装一遍-->
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>

        <div v-else>
            <slot name="item-isActive"></slot>
        </div>

        <!--        替换文字颜色-->
        <div :class="{active:isActive}">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        computed:{
            isActive(){
                // 动态获取isActive为True还是False
                return this.$route.path.indexOf(this.link) !== -1
            }
        },
        props:{     //接收父传子的数据
            link:String
        },
        methods:{
            itemClick(){        //获取点击的item转路由页面
                this.$router.push(this.link)
                console.log(this.link);
            }
        }
    }
</script>

<style scoped>
    .active{          /*//设置Tabbar文字的颜色*/
        color: rgba(255, 0, 0, 0.72);
    }
</style>