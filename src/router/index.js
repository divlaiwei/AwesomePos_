import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Store from '@/components/page/Store'
import Member from '@/components/page/Member'
import Goods from '@/components/page/Goods'
import Login from '@/components/page/Login'
// import StoreList1 from '@/components/page/storelist/StoreList1'
// import StoreList2 from '@/components/page/storelist/StoreList2'
// import StoreList3 from '@/components/page/storelist/StoreList3'
// import StoreList4 from '@/components/page/storelist/StoreList4'
// import StoreList5 from '@/components/page/storelist/StoreList5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },
    {
      path:'/store',
      name:'Store',
      component:Store
      // ,children:[
      //   {path:'/storelist1', components:StoreList1} ,
      //   {path:'/storelist2', components:StoreList2} ,
      //   {path:'/store/storelist3', components:StoreList3} ,
      //   {path:'/store/storelist4', components:StoreList4} ,
      //   {path:'/store/storelist5', components:StoreList5}
      // ]
    },{
      path:'/member',
      name:'Member',
      component:Member
    },{
      path:'/goods',
      name:'Goods',
      component:Goods
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ]
})
