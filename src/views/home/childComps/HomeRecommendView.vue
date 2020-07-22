<template>
    <div class="recommend">
        <div v-for="item in recommendView" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommendView",
        props:{
            recommendView: {
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .recommend{
        display: flex;
        text-align: center;
        font-size: 15px;
        padding: 10px 0px 20px 0px;
        border-bottom: 10px solid #eee;
        background-color: white;
    }
    .recommend-item{
        flex: 1;
        width: 20px;
    }
    .recommend-item img{
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
</style>