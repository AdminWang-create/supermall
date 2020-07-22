<template>
    <div class="warpper">
        <ul>
            <button>button</button>
            <li>分类列表57</li>
            <li>分类列表76</li>
            <li>分类列表77</li>
            <li>分类列表78</li>
            <li>分类列表79</li>
            <li>分类列表80</li>
            <li>分类列表81</li>
            <li>分类列表82</li>
            <li>分类列表83</li>
            <li>分类列表84</li>
            <li>分类列表85</li>
            <li>分类列表86</li>
            <li>分类列表87</li>
            <li>分类列表88</li>
            <li>分类列表89</li>
            <li>分类列表90</li>
            <li>分类列表91</li>
            <li>分类列表92</li>
            <li>分类列表93</li>
            <li>分类列表94</li>
            <li>分类列表95</li>
            <li>分类列表96</li>
            <li>分类列表97</li>
            <li>分类列表98</li>
            <li>分类列表99</li>
            <li>分类列表100</li>
        </ul>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Category",
        data(){
            return{
                bscroll:null
            }
        },
        mounted() {
            let bscroll = new BScroll(document.querySelector('.warpper'),{
                probeType: 3,
                click: true,
                pullUpLoad: 3,
                pullDownRefresh: true
            })

            /**
             * 显示侦测拉动实时位置
             * */
            bscroll.on('scroll',(position)=>{
                console.log(position);
            })

            /**
             * 上拉加载事件， 应用于上拉加载更多数据
             * */
            bscroll.on('pullingUp',() => {
                console.log("上拉加载跟多")

                /***
                 * 定时器
                 * */
                setTimeout( () => {
                    bscroll.finishPullUp()
                },20)

            })

            /**
             * 下拉刷新事件 用于加载数据
             * */
            bscroll.on('pullingDown',() => {
                console.log('下拉刷新');
                bscroll.finishPullDown()
            })
        }
    }
</script>

<style scoped>
 .warpper{
     height: 150px;
     background-color: rgba(0, 128, 0, 0.36);

     overflow: hidden;
 }
</style>