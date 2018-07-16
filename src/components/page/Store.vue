<template > <!--//点击城市显示快餐店信息 未完成-->
     <div class="searchBox">
       <div class="searchList">
         <el-form ref="form" :model="form" label-width="80px" >
         <h3>请选择你所在的城市</h3>
         <el-form-item label="全部城市">
           <el-select v-model="form.region" placeholder="--请选择--" value="default">
             <el-option label="燕京" value="beijing" ></el-option>
             <el-option label="沪上" value="shanghai"></el-option>
             <el-option label="深城" value="shenzhen"></el-option>
             <el-option label="苏杭" value="hangzhou"></el-option>
             <el-option label="蓉城" value="chengdu" ></el-option>
           </el-select>
         </el-form-item>

           <el-form-item>
             <el-button type="primary" @click="onSubmit">立即搜索</el-button>
           </el-form-item>

         <h3>请选择你需要补货的品类</h3>
         <el-form-item label="当季热销">
           <el-checkbox-group v-model="form.type">
             <el-checkbox label="汉堡" name="type"></el-checkbox>
             <el-checkbox label="小食" name="type"></el-checkbox>
             <el-checkbox label="饮品" name="type"></el-checkbox>
             <el-checkbox label="套餐" name="type"></el-checkbox>
           </el-checkbox-group>
         </el-form-item>
         <el-form-item label="限量供应">
           <el-radio-group v-model="form.resource">
             <el-radio label="McCafé 美式咖啡"></el-radio>
             <el-radio label="McCafé 亚洲茶饮"></el-radio>
           </el-radio-group>
         </el-form-item>

           <h3>请选择配送具体时间</h3>
           <el-form-item label="最早配送">
             <el-col :span="11">
               <el-date-picker type="date" placeholder="配送日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
             </el-col>
             <el-col class="line" :span="1">--</el-col>
             <el-col :span="11">
               <el-time-picker type="fixed-time" placeholder="配送时间" v-model="form.date2" style="width: 95%;"></el-time-picker>
             </el-col>
           </el-form-item>
           <el-form-item label="最晚配送">
             <el-col :span="11">
               <el-date-picker type="date" placeholder="配送日期" v-model="form.date3" style="width: 100%;"></el-date-picker>
             </el-col>
             <el-col class="line" :span="1">--</el-col>
             <el-col :span="11">
               <el-time-picker type="fixed-time" placeholder="配送时间" v-model="form.date4" style="width: 95%;"></el-time-picker>
             </el-col>

           </el-form-item>
           <el-form-item label="即时配送">
             <el-switch v-model="form.delivery"></el-switch>
           </el-form-item>
           <el-form-item>
             <el-button type="primary" @click="firmOrder">提交</el-button>
             <el-button>取消</el-button>
           </el-form-item>
         </el-form>
       </div>
       <div class="mapBox">
         <div  v-if="shanghai">
              <dl>
                <dd>
                  <div>
                    <span>上海美罗店</span>
                    <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D上海市天钥桥路20号">
                      <img src="../../assets/viewmap.gif" border="0">
                    </a>
                    <p>店长:张三</p>
                    <p>电话:021-64267515 </p>
                    <p>地址:上海市徐汇区肇嘉浜路1111号美罗城一楼</p>
                  </div>
                </dd>
              </dl>
           <dl>
             <dd>
               <div>
                 <span>上海仲盛店</span>
                 <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D上海市闵行区都市路5001号">
                   <img src="../../assets/viewmap.gif" border="0">
                 </a>
                 <p>店长:李四</p>
                 <p>电话:021-34636701 </p>
                 <p>地址:上海市闵行区都市路5001号仲盛世界商城B1（F10-F11）</p>
               </div>
             </dd>
           </dl>
           <dl>
             <dd>
               <div>
                 <span>上海高科店</span>
                 <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D碧波路635号">
                   <img src="../../assets/viewmap.gif" border="0">
                 </a>
                 <p>店长:王五</p>
                 <p>电话:021-50276811 </p>
                 <p>地址:上海市浦东新区张江高科技园区 碧波路635号104-204</p>
               </div>
             </dd>
           </dl>
           <dl>
             <dd>
               <div>
                 <span>上海新国际博览中心店</span>
                 <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D上海市新国际博览中心">
                   <img src="../../assets/viewmap.gif" border="0">
                 </a>
                 <p>店长:候六</p>
                 <p>电话:021-28906785 </p>
                 <p>地址:上海市浦东新区芳甸路1201号上海新国际博览中心北入口大厅一楼</p>
               </div>
             </dd>
           </dl>
           <dl>
             <dd>
               <div>
                 <span>上海万达店</span>
                 <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D上海市淞沪路77号">
                   <img src="../../assets/viewmap.gif" border="0">
                 </a>
                 <p>店长:柳七</p>
                 <p>电话:021-6511203 </p>
                 <p>地址:上海市淞沪路77号上海万达商业广场一楼A-01 </p>
               </div>
             </dd>
           </dl>


         </div>

         <div  v-else-if="beijing">
         <dl>
           <dd>
             <div>
               <span>北京南站店</span>
               <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D北京市丰台区永外大街12号">
                 <img src="../../assets/viewmap.gif" border="0">
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
                 <img src="../../assets/viewmap.gif" border="0">
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
                 <img src="../../assets/viewmap.gif" border="0">
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
                 <img src="../../assets/viewmap.gif" border="0">
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
                 <img src="../../assets/viewmap.gif" border="0">
               </a>
               <p>店长:柳八</p>
               <p>电话:010-65253310</p>
               <p>地址:王府井大街帅府园胡同9号</p>
             </div>
           </dd>
         </dl>
      </div>

         <div  v-else-if="shenzhen">
           <dl>
             <dd>
               <div>
                 <span>深圳北站店</span>
                 <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D深圳市龙华区龙华新区民治街道致远中路28号深圳北站二层">
                   <img src="../../assets/viewmap.gif" border="0">
                 </a>
                 <p>店长:赵一</p>
                 <p>电话:0755-61825153 </p>
                 <p>地址:深圳市龙华区龙华新区民治街道致远中路28号深圳北站二层</p>
               </div>
             </dd>
           </dl>
           <dl>
             <dd>
               <div>
                 <span>深圳龙岗店</span>
                 <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D深圳龙岗区布吉街道吉华路商业综合楼">
                   <img src="../../assets/viewmap.gif" border="0">
                 </a>
                 <p>店长:李五</p>
                 <p>电话:0755-28872888 </p>
                 <p>地址: 深圳龙岗区布吉街道吉华路商业综合楼第4-6层</p>
               </div>
             </dd>
           </dl>
           <dl>
             <dd>
               <div>
                 <span>深圳市中心店</span>
                 <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D福田区福中三路市民中心B区2-9楼">
                   <img src="../../assets/viewmap.gif" border="0">
                 </a>
                 <p>店长:钱六</p>
                 <p>电话:0755-88121155</p>
                 <p>地址:深圳福田区福中三路市民中心B区2-9楼</p>
               </div>
             </dd>
           </dl>
           <dl>
             <dd>
               <div>
                 <span>深圳福田店</span>
                 <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D深圳福田区福强路1045号深荣大厦">
                   <img src="../../assets/viewmap.gif" border="0">
                 </a>
                 <p>店长:孙七</p>
                 <p>电话:0755-83871111 </p>
                 <p>地址:深圳福田区福强路1045号深荣大厦</p>
               </div>
             </dd>
           </dl>
           <dl>
             <dd>
               <div>
                 <span>深圳罗湖店</span>
                 <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D深圳市罗湖区宝安南路1881号深圳华润万象城F1">
                   <img src="../../assets/viewmap.gif" border="0">
                 </a>
                 <p>店长:周八</p>
                 <p>电话:075-522211782</p>
                 <p>地址:深圳市罗湖区宝安南路1881号深圳华润万象城F1</p>
               </div>
             </dd>
           </dl>
         </div>

         <div v-else-if="hangzhou" >
             <dl>
               <dd>
                 <div>
                   <span>杭州西湖店</span>
                   <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D杭州市上城区西湖景区南山路171号号">
                     <img src="../../assets/viewmap.gif" border="0">
                   </a>
                   <p>店长:张思</p>
                   <p>电话:0571-87181888 </p>
                   <p>地址:杭州市上城区西湖景区南山路171号号</p>
                 </div>
               </dd>
             </dl>
             <dl>
               <dd>
                 <div>
                   <span>杭州萧山店</span>
                   <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D杭州市萧山区金惠路317">
                     <img src="../../assets/viewmap.gif" border="0">
                   </a>
                   <p>店长:李物</p>
                   <p>电话:0571-82202770</p>
                   <p>地址:杭州市萧山区金惠路317</p>
                 </div>
               </dd>
             </dl>
             <dl>
               <dd>
                 <div>
                   <span>杭州江干店</span>
                   <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D浙江省杭州市江干区四季青街道钱江三苑20幢底商1号">
                     <img src="../../assets/viewmap.gif" border="0">
                   </a>
                   <p>店长:王六</p>
                   <p>电话:0571-50276811 </p>
                   <p>地址:浙江省杭州市江干区四季青街道钱江三苑20幢底商1号</p>
                 </div>
               </dd>
             </dl>
             <dl>
               <dd>
                 <div>
                   <span>杭州下城店</span>
                   <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D杭州市下城区东新路155号和平购物城F1">
                     <img src="../../assets/viewmap.gif" border="0">
                   </a>
                   <p>店长:候霸</p>
                   <p>电话:0571-88003860 </p>
                   <p>地址:杭州市下城区东新路155号和平购物城F1</p>
                 </div>
               </dd>
             </dl>
             <dl>
               <dd>
                 <div>
                   <span>杭州拱墅店</span>
                   <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D杭州市拱墅区杭行路666号杭州拱墅万达广场F1">
                     <img src="../../assets/viewmap.gif" border="0">
                   </a>
                   <p>店长:柳酒</p>
                   <p>电话:0571-28896762</p>
                   <p>地址:杭州市拱墅区杭行路666号杭州拱墅万达广场F1 </p>
                 </div>
               </dd>
             </dl>
           </div>

         <div  v-else="chengdu" >
           <dl>
             <dd>
               <div>
                 <span>成都高新店</span>
                 <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D四川省成都市高新区天府大道北段999号">
                   <img src="../../assets/viewmap.gif" border="0">
                 </a>
                 <p>店长:张出</p>
                 <p>电话:028-88088888 </p>
                 <p>地址:四川省成都市高新区天府大道北段999号</p>
               </div>
             </dd>
           </dl>
           <dl>
             <dd>
               <div>
                 <span>成都武侯店</span>
                 <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D四川省成都市武侯区科华路2号">
                   <img src="../../assets/viewmap.gif" border="0">
                 </a>
                 <p>店长:李物</p>
                 <p>电话:028-67626688 </p>
                 <p>地址: 四川省成都市武侯区科华路2号</p>
               </div>
             </dd>
           </dl>
           <dl>
             <dd>
               <div>
                 <span>成都九眼桥店</span>
                 <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D成都市一环路南一段九眼桥太平巷13号附3号">
                   <img src="../../assets/viewmap.gif" border="0">
                 </a>
                 <p>店长:王柳</p>
                 <p>电话:028-50276811 </p>
                 <p>地址:一环路南一段九眼桥太平巷13号附3号</p>
               </div>
             </dd>
           </dl>
           <dl>
             <dd>
               <div>
                 <span>成都青羊店</span>
                 <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D成都市江汉路222号">
                   <img src="../../assets/viewmap.gif" border="0">
                 </a>
                 <p>店长:冯绍峰</p>
                 <p>电话:028-28906785 </p>
                 <p>地址:成都市江汉路222号</p>
               </div>
             </dd>
           </dl>
           <dl>
             <dd>
               <div>
                 <span>成都川音店</span>
                 <a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D四川省成都市新都区蜀龙大道中段620号">
                   <img src="../../assets/viewmap.gif" border="0">
                 </a>
                 <p>店长:杨幂</p>
                 <p>电话:028-85430270</p>
                 <p>地址:四川省成都市新都区蜀龙大道中段620号 </p>
               </div>
             </dd>
           </dl>
         </div>
       </div>



     </div>
</template>

<script>
  // import Left from
  export default {
      data(){
         return{
           form:{
             region:'',
             type:[],
             resource:'',
             date1:'',
             date2:'',
             date3:'',
             date4:'',
             delivery:false,
             // city:'hangzhou'
           }

          }
        },
    methods:{
        onSubmit(){
          this.city=='hangzhou';
        },
      firmOrder(){
          this.$confirm('本次操作将提交总部, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '提交成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });
          });
        }
      }
      }


</script>

<style scoped>
  .searchBox{
    background-color: #fff;
    margin: 0 auto;
  }

   .searchList{
     /*text-align: left;*/
     border: 1px solid #FFF5EB;
     background-color: #FFF5EB;
     margin-left:33px;

     display: block;
     width: 500px;
     height: 1024px;
     float: left;
     clear: both;
   }

   h3{
     padding-left: 15px;
   }

    .mapBox{
      border: 1px solid #FFF5EB;
      float: right;
      width: 1236px;
      height: 1024px;
      background:url("../../assets/mapbox.jpg") ;
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
