<template>
      <div class="pos">
             <el-row>  <!--调用Element-UI 需要在标签添加el -->
                <el-col :span='7' class="pos-order" id="order-list">
                  <el-tabs class="tabs">
                    <el-tab-pane label="点餐">
                      <el-table border style="width:100%" :data="tableData">
                         <el-table-column prop="foodsName" label="商品名称" ></el-table-column>
                         <el-table-column prop="count" label="数量" width="60"></el-table-column>
                         <el-table-column prop="price" label="单价" width="60"></el-table-column>
                         <el-table-column  label="操作" width="100" fixed="right">
                            <template slot-scope="scope">                                 <!--Element 规定用scope.row取得值-->
                                 <el-button type="text" size="small" @click="addOrderList(scope.row)">添加</el-button>
                                 <el-button type="text" size="small" @click="delFoods(scope.row)">删除</el-button>
                            </template>
                         </el-table-column>
                      </el-table>
                      <div class="totalSum">
                          <span>数量：{{this.totalCount}}</span>  <span>总计：¥ {{this.totalMoney}}</span>
                      </div>
                      <div class="btn-tab">
                         <el-button type="warning">出单</el-button>
                         <el-button type="danger" @click="delAllFoods()">清除</el-button>
                         <el-button type="success"@click="checkOut()">结账</el-button>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="出单">网络故障，请检查！</el-tab-pane>
                    <el-tab-pane label="外送">店内忙碌，外送服务暂停！</el-tab-pane>
                  </el-tabs>
                </el-col>


               <el-col :span='17'>
                 <div>
                   <div class="title">热销单品</div>
                   <div class="often-list">
                     <ul>
                       <li v-for="foods in oftenFoods" @click="addOrderList(foods)">
                         <span>{{foods.foodsName}}</span>
                         <span class="o-price">¥ {{foods.price}}</span>
                       </li>
                     </ul>
                   </div>
                 </div>
                    <div class="foods-type">
                        <el-tabs>
                             <el-tab-pane label="汉堡" >
                                     <ul class="foodList">
                                       <li v-for="foods in typeFoods[0]" @click="addOrderList(foods)">
                                         <span class="foodImg"><img :src="foods.foodsImg" width="100%"></span>
                                         <span class="foodName">{{foods.foodsName}}</span>
                                         <span class="foodPrice">¥ {{foods.price}}元</span>
                                       </li>
                                     </ul>
                             </el-tab-pane>
                             <el-tab-pane label="小食" >
                               <ul class="foodList">
                                 <li v-for="foods in typeFoods[1]"  @click="addOrderList(foods)">
                                   <span class="foodImg"><img :src="foods.foodsImg" width="100%"></span>
                                   <span class="foodName">{{foods.foodsName}}</span>
                                   <span class="foodPrice">¥ {{foods.price}}元</span>
                                 </li>
                               </ul>
                             </el-tab-pane>
                             <el-tab-pane label="饮品" >
                               <ul class="foodList">
                                 <li v-for="foods in typeFoods[2]" @click="addOrderList(foods)">
                                   <span class="foodImg"><img :src="foods.foodsImg" width="100%"></span>
                                   <span class="foodName">{{foods.foodsName}}</span>
                                   <span class="foodPrice">¥ {{foods.price}}元</span>
                                 </li>
                               </ul>
                             </el-tab-pane>
                             <el-tab-pane label="套餐" >
                               <ul class="foodList">
                                 <li v-for="foods in typeFoods[3]"  @click="addOrderList(foods)">
                                   <span class="foodImg"><img :src="foods.foodsImg" width="100%"></span>
                                   <span class="foodName">{{foods.foodsName}}</span>
                                   <span class="foodPrice">¥ {{foods.price}}元</span>
                                 </li>
                               </ul>
                             </el-tab-pane>
                        </el-tabs>
                    </div>


               </el-col>
             </el-row>
      </div>
</template>

<script>
   // import  axios from 'axios';

    export default {
        name: "pos",
      data(){
          return{
             tableData:[

            //{
            //   foodsName: '可乐大杯',
            //   price: 12,
            //   count:1
            // }, {
            //
            //   foodsName: '墨西哥风味鸡腿堡',
            //   price: 16,
            //   count:1
            // }, {
            //
            //   foodsName: '薯条',
            //   price: 8,
            //   count:1
            // }, {
            //
            //   foodsName: '甜筒',
            //   price:6,
            //   count:1
            // }
            ],



            oftenFoods:[
              {
                foodsId:31,
                foodsName:'愤怒LinFriends套餐',
                price:48
              }, {
                foodsId:6,
                foodsName:'巨无霸鸡王堡',
                price:33
              }, {
                foodsId:35,
                foodsName:'火辣Z明星同款套餐',
                price:39
              }, {
                foodsId:3,
                foodsName:'麦香鳕鱼堡',
                price:16
              }, {
                foodsId:13,
                foodsName:'终极四酱霸王薯条',
                price:21
              }, {
                foodsId:14,
                foodsName:'新奥尔良烤翅-8块',
                price:36
              }, {
                foodsId:15,
                foodsName:'葡式经典蛋挞-6只',
                price:22
              }, {
                foodsId:28,
                foodsName:'雪原冰露',
                price:5
              }, {
                foodsId:16,
                foodsName:'双面薰衣草冰淇淋',
                price:13
              }, {
                foodsId:21,
                foodsName:'红豆派',
                price:6.5
              }
            ],

            typeFoods:[
              [ { "foodsId": 1, "foodsImg": "http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061701346777.png", "foodsName": "双层吉士汉堡", "price": 18 },
                { "foodsId": 2, "foodsImg": "http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061702344905.png", "foodsName": "麦香鸡腿堡", "price": 15 },
                { "foodsId": 3, "foodsImg": "http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061704079580.png", "foodsName": "麦香鳕鱼堡", "price": 16 },
                { "foodsId": 4, "foodsImg": "http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061723486318.png", "foodsName": "麦辣火鸡堡", "price": 15 },
                { "foodsId": 5, "foodsImg": "http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061707075050.png", "foodsName": "培根蔬萃双层堡", "price": 22 },
                { "foodsId": 6, "foodsImg": "http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061706277305.png", "foodsName": "巨无霸鸡王堡", "price": 33 },
                // { "foodsId": 7, "foodsImg": "http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061701025899.png", "foodsName": "原味板烧鸡腿堡", "price": 15 },
                { "foodsId": 7, "foodsImg": "http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2017/09/201709081640184570.png", "foodsName": "吉祥蛋挞堡", "price": 15 },
                { "foodsId": 8, "foodsImg": "http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2018/06/201806271648252562.png", "foodsName": "不素之霸", "price": 18 },
                { "foodsId": 9, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/481_333892.jpg", "foodsName": "愤怒鸡汁汉堡王", "price": 19 },
                { "foodsId": 10, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/359_189885.jpg", "foodsName": "鸡肉火腿帕尼尼", "price": 17 },
                { "foodsId": 11, "foodsImg": "http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2018/06/201806281011087265.png", "foodsName": "阿拉斯加鲟鱼堡", "price": 17 },
                { "foodsId": 12, "foodsImg": "http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2018/06/201806281017214247.png", "foodsName": "俄式红肠双鸡堡", "price": 18 },

                ],
              [
                { "foodsId": 13, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/481_333910.jpg", "foodsName": "终极四酱霸王薯条", "price": 21 },
                { "foodsId": 14, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/475_319780.jpg", "foodsName": "新奥尔良烤翅-8块", "price": 36 },
                { "foodsId": 15, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/475_319744.jpg", "foodsName": "葡式经典蛋挞-6只", "price": 22 },
                { "foodsId": 16, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/475_320776.jpg", "foodsName": "双面薰衣草冰淇淋", "price": 13 },
                { "foodsId": 17, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/140_47035.jpg", "foodsName": "芙蓉荟萃汤", "price": 8 },
                { "foodsId": 18, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/470_313623.jpg", "foodsName": "安心大油条", "price": 7.5 },
                { "foodsId": 19, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/402_233743.jpg", "foodsName": "皮蛋瘦肉粥", "price": 9.5 },
                { "foodsId": 20, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/470_313622.jpg", "foodsName": "香菇滑鸡粥", "price": 9.5 },
                { "foodsId": 21, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/399_231685.jpg", "foodsName": "红豆派", "price": 6.5 },
                { "foodsId": 22, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/470_313643.jpg", "foodsName": "巧克力味华夫", "price": 6.5 },
                ],
              [
                { "foodsId": 23, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/441_277627.jpg", "foodsName": "伴柠伴桔鲜果茶", "price": 13 },
                { "foodsId": 24, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/378_208203.jpg", "foodsName": "热柠檬红茶", "price": 11 },
                { "foodsId": 25, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/378_210663.jpg", "foodsName": "九珍果汁", "price": 11 },
                { "foodsId": 26, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/481_330173.jpg", "foodsName": "新原味圣代", "price": 10 },
                { "foodsId": 27, "foodsImg": "http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061811032770.png", "foodsName": "零度可乐", "price": 13 },
                { "foodsId": 28, "foodsImg": "http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061810291535.png", "foodsName": "雪原冰露", "price": 5 },
                { "foodsId": 29, "foodsImg": "http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2016/02/201602171846327169.png", "foodsName": "优品豆浆", "price": 6 },
                { "foodsId": 30, "foodsImg": "http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061823032589.png", "foodsName": "热朱古力", "price": 14 },

                ],
              [

                { "foodsId": 31, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/481_333906.jpg", "foodsName": "愤怒LinFriends套餐", "price": 48 },
                { "foodsId": 32, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/481_333907.jpg", "foodsName": "柚香堡LineGirl套餐", "price": 32 },
                { "foodsId": 33, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/449_283787.jpg", "foodsName": "香辣鸡腿堡豆派L餐", "price": 66 },

                { "foodsId": 34, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/481_330200.jpg", "foodsName": "至尊虾堡纹薯套餐", "price": 37 },
                { "foodsId": 35, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/462_300616.jpg", "foodsName": "火辣Z明星同款套餐", "price": 39 },
                { "foodsId": 36, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/481_330227.jpg", "foodsName": "卷堡Z系双人套餐", "price": 32 },

                { "foodsId": 37, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/449_283787.jpg", "foodsName": "奥尔良烤腿堡Y餐", "price": 55 },

                { "foodsId": 38, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/481_333908.jpg", "foodsName": "DoDo堡套餐", "price": 41 },
                { "foodsId": 39, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/481_330210.jpg", "foodsName": "卷堡S系三人餐", "price": 55 },
                // { "foodsId": 29, "foodsImg": "https://img.4008823823.com.cn/kfcios/Version/449_283785.jpg", "foodsName": "老北京烤鸡翅餐", "price": 39 },
                ]
            ],
            totalMoney:0,
            totalCount:0


          }
      },
      // created(){   //跨域问题URL待解决
      //     axios.get('https://github.com/divlaiwei/product/blob/master/oftenFoods.php')
      //       .then(reponse=>{this.oftenFoods=reponse;})
      //       .catch(error=>{console.log(error);})
      // },

      mounted(){
          var orderHeight=document.body.clientHeight;
          document.getElementById("order-list").style.height=orderHeight+'px';
      },
      methods:{
          addOrderList(foods){
            //判断商品是否存在左侧订单·
               let isFood=false;
               for(let i=0;i<this.tableData.length;i++){
                 if(this.tableData[i].foodsId==foods.foodsId){
                       isFood=true;
                 }
               }

            //返回判断结果
              if(isFood){
                  //商品中的数量变化，用过滤判断，通过就++
                let res=this.tableData.filter(f=>f.foodsId==foods.foodsId);
                res[0].count++;
              }else{    //为了构造新的商品,添加的几个属性
                 let newfoods={foodsId:foods.foodsId,foodsName:foods.foodsName, price:foods.price,count:1};
                 this.tableData.push(newfoods);
              }
            this.getAllMoney();

          },
         //删除单个商品的功能
        delFoods(foods){
           this.tableData=this.tableData.filter(f=>f.foodsId!=foods.foodsId);
           this.getAllMoney();
          },
        //删除所有商品的功能
        delAllFoods(){
             this.tableData=[];
             this.totalCount=0;
             this.totalMoney=0;
   },
        //结账功能-欠缺后台数据传递 -待补充
        checkOut(){
            if(this.totalCount!=0){
              this.tableData=[];
              this.totalCount=0;
              this.totalMoney=0;
              this.$message({
                message:"付款成功,请及时出单！",
                type:'success'
              });
            }else{
              this.$message.error('结账有误，请重新检查！');
            }
        },



        //汇总数量金额
        getAllMoney(){
          //总数总金额和数量的累积计算
          this.totalMoney=0;
          this.totalCount=0;
          //使用for循环遍历数量和金额
          for(let i=0;i<this.tableData.length;i++){
            this.totalCount+=this.tableData[i].count;
            this.totalMoney+=this.tableData[i].price*this.tableData[i].count;
          }
        }

      }
    }
</script>

<style scoped>
  small{
    margin-right: 30px;
  }
  .pos-order{
    background-color: #F9FAFC;
    border-right:1px solid #C0CCDA;
    border-height:1024px ;
  }
  .tabs{
    margin-left: 5px;
  }

  .btn-tab{
    margin-top: 12px;
    margin-right:10px;
    float: right;
    clear: both;
  }
  .title{
    height: 20px;
    border-bottom: 1px solid #D3dce6;
    background-color: #F9FAFC;
    padding: 10px;

  }

  .often-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #F9FAFC;
    padding: 10px;
    margin: 10px;
    background-color: #fff;
  }
  .o-price{
    color: red;
  }
  .foods-type{
    clear: both;
    margin:5px;

  }

  .totalSum{
    float: right;
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #D3dce6;
    clear: both;
  }

  .foodList li{
    list-style: none;
    width:23%;
    border:1px solid #E5E9F2;
    height: auot;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;

  }
  .foodList li span{

    display: block;
    float:left;
  }
  .foodImg{
    width: 45%;

  }
  .foodName{
    font-size: 16px;
    padding-left: 10px;
    color:brown;

  }
  .foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top:10px;
  }
</style>
