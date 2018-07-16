<template id="beijing">
  <div class="mapBox">
    <dl>
      <dd>
        <div>
          <span>北京南站店</span>
          <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D北京市丰台区永外大街12号">
            <img src="../../../assets/viewmap.gif" border="0">
          </a>
          <p>店长:张四</p>
          <p>电话:010-67666688 </p>
          <p>地址:北京市丰台区永外大街12号</p>
        </div>
      </dd>
    </dl>
    <dl>
      <dd>
        <div>
          <span>北京东城店</span>
          <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D北京南三环定安东里1号">
            <img src="../../../assets/viewmap.gif" border="0">
          </a>
          <p>店长:李五</p>
          <p>电话:010-67626688 </p>
          <p>地址: 北京市丰台区定安东里1号中成天坛</p>
        </div>
      </dd>
    </dl>
    <dl>
      <dd>
        <div>
          <span>北京西城店</span>
          <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D北京市西城区德外黄寺大街23号福丽特商业街F1">
            <img src="../../../assets/viewmap.gif" border="0">
          </a>
          <p>店长:王六</p>
          <p>电话:010-50276811 </p>
          <p>地址:北京市西城区德外黄寺大街23号福丽特商业街F1</p>
        </div>
      </dd>
    </dl>
    <dl>
      <dd>
        <div>
          <span>北京中南海店</span>
          <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D北京市西城区西黄城根南街35号">
            <img src="../../../assets/viewmap.gif" border="0">
          </a>
          <p>店长:候七</p>
          <p>电话:010-28906785 </p>
          <p>地址:北京市西城区西黄城根南街35号</p>
        </div>
      </dd>
    </dl>
    <dl>
      <dd>
        <div>
          <span>北京王府井店</span>
          <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D王府井大街帅府园胡同9号">
            <img src="../../../assets/viewmap.gif" border="0">
          </a>
          <p>店长:柳八</p>
          <p>电话:010-65253310</p>
          <p>地址:王府井大街帅府园胡同9号</p>
        </div>
      </dd>
    </dl>
  </div>

</template>

<script>
    //  import StoreList1 from '@/components/page/StoreList1'
    //
    // export default {
    //     name: "StoreList1"
    //   components:{
    //
    //   }
    // }
</script>

<style scoped>
  h3{
    padding-left: 15px;
  }

  .mapBox{
    border: 1px solid #FFF5EB;
    float: right;
    width: 1236px;
    height: 1024px;
    background:url("../../../assets/mapbox.jpg") ;
    background-repeat:no-repeat;
    background-size:100% 1024px;
  }
  .mapBox dl dd div{
    margin-left: 100px;
  }

  .mapBox dl dd div span {
    font-size: 18px;
    padding: 0px;
    font-weight: bold;
    color: #F07D13;
    font-family: "微软雅黑","黑体";
    margin-top: 5px;
  }
  .mapBox dl dd div a,img{
    padding-left: 15px;
    margin-top: 15px;
  }
</style>
