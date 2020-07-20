import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

export default new VueRouter({
    routes:[
        {
            path:'',
            redirect:'/Home'
        },
        {
            path:'/Home',
            component:Home
        },
        {
            path:'/Category',
            component:category
        },
        {
            path:'/Cart',
            component:Cart
        },
        {
            path:'/Profile',
            component:Profile
        }
    ],
    mode:'history'
})