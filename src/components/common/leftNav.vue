<template>
     <div class="left-nav">
       <ul>
         <li>
           <i class="icon iconfont icon-goumai"></i>
           <div>
             <router-link to="/">收银</router-link>
           </div>

         </li>
         <li>
           <i class="icon iconfont icon-dianpu"></i>
           <div>
           <router-link to="/store">店铺</router-link>
           </div>
         </li>
         <li>
           <i class="icon iconfont icon-hanbao1"></i>
           <div>
              <router-link to="/goods">商品</router-link>
           </div>
         </li>
         <li>
            <i class="icon iconfont icon-huiyuanqia"></i>
              <div>
            <router-link to="/member">会员</router-link>
              </div>
       </li>
         <li>
            <i class="icon iconfont icon-tongjifenxi"></i>
            <div>
              <router-link to="">统计</router-link>
            </div>
         </li>
         <li>
           <i class="icon iconfont icon-gongnengjianyi"></i>
           <div>
             <router-link to="/login">设置</router-link>
           </div>
         </li>

       </ul>
     </div>
</template>

<script>

</script>

<style scoped>
  .left-nav{
    color:#fff;
    font-size: 10px;
    height: 100%;
    background-color:#1D8CE0;
    float: left;
    width: 5%;
  }
  .iconfont{
    font-size: 24px;
  }
  .left-nav ul{
    padding: 0px;
    margin: 0px;
  }
  .left-nav li{
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #20a0ff;
    padding: 10px;
  }

  a:link {
    color:#fff;
    text-decoration: none;

  }


</style>
