<template>
  <div>
  <el-carousel :interval="3000" type="card" style="height: 100%,width:100%,position:relative">
    <el-carousel-item  :key=item v-for="(pic,item) in imgs"  style="position:absolute">
      <!--<img src="../../assets/dilireba.jpg"/>-->
      <!--<img src="../../assets/huangbo.jpg"/>-->
      <!--<img src="../../assets/luhan.jpg"/>-->
      <!--<img src="../../assets/huangbo.jpg"/>-->
      <el-row>
         <el-col>
             <img :src="pic.src" />
         </el-col>
      </el-row>
    </el-carousel-item>
  </el-carousel>

   <div>
  <el-table :data="tableData" style="width: 100%" >
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="所属区域">
            <span>{{ props.shop }}</span>
          </el-form-item>
          <el-form-item label="分店地址">
            <span>{{ props.address }}</span>
          </el-form-item>
          <el-form-item label="会员描述">
          <span>{{ props.res }}</span>
        </el-form-item>

        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="会员 ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="会员姓名"
      prop="name">
    </el-table-column>
    <el-table-column
      label="会员等级"
      prop="desc">
      <!--<el-rate prop="star" disabled-->
        <!--show-score-->
        <!--text-color="#ff9900"-->
        <!--score-template="{value}">-->
      <!--</el-rate>-->

    </el-table-column>
  </el-table>
   </div>
    <div class="page_box" @click="code">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="990" >
    </el-pagination>
    </div>
    </div>


</template>

<script>
  export  default {
    name:'Member',
    data(){
      return{
        imgs:[
          {src:require("../../assets/dilireba.jpg")},
          {src:require("../../assets/huangbo.jpg")},
          {src:require("../../assets/luhan.jpg")},
          {src:require("../../assets/yangmi.jpg")},
          {src:require("../../assets/xuzheng.jpg")},
        ],
        tableData: [{
          id: '02100760056',  //卡号
          name: '迪丽热巴',  //姓名
          res:'这是一个大美女',
          desc: '二星',   //描述
          shop: '沪上',  //地址
          address: '你猜',

        }, {
          id: '01087183',
          name: '黄渤',
          res:'金鸡奖影帝',
          desc: '三星',
          address: '中南海',
          shop: '燕京',

        }, {
          id: '05717125',
          name: '杨幂',
          desc: '二星',
          address: '环球中心',
          shop: '苏杭',
          res:'大美女的老板'

        }, {
          id: '010007126',
          name: '鹿晗',
          desc: '一星半',
          address: '朝阳',
          shop: '燕京',
          res:'小鲜肉'
        },{
          id: '010001188466',
          name: '何少年',
          desc: '二星',
          address: '朝阳',
          shop: '燕京',
          res:'红二代'
        },{
          id: '01002959426',
          name: '徐少峰',
          desc: '三星半',
          address: '朝阳',
          shop: '燕京',
          res:'资产千亿的大老板'
        },{
          id: '01065167126',
          name: '李二狗',
          desc: '二星',
          address: '朝阳',
          shop: '燕京',
          res:'金陵之王'
        },{
          id: '018555526',
          name: '杰克马',
          desc: '三星半',
          address: '朝阳',
          shop: '燕京',
          res:'阿里巴巴的爸爸',

        }
        ]
      }
    },
    methods: {
      code() {
        this.$prompt('查看更多会员信息请输入授权码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^[A-Za-z0-9]$/,
          inputErrorMessage: '警告!授权码验证不正确!'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的授权码是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }
    }
  //   watch:{
  //    imgs.imgHeight = '620px',
  //     window.onresize = function temp() {
  //   // 通过点语法获取img的height属性值
  //   imgs.imgHeight = this.$refs.imgHeight['0'].height;
  // }
  //   }

  }
</script>

<style scoped>
  .el-carousel__item img {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  /*img{*/
    /*height:150%;*/
    /*width:100%;*/
  /*}*/

img{
  width: 100%;
  height: 100%;
}

  .page_box{
    float: right;
    margin-top: 30px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #d3dce6;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
