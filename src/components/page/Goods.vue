<template>
  <div  @click="clickme">
  <el-table
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    :data="tableData"  style="width:100%,height:100%"
  >
    <el-table-column
      prop="date"
      label="产品周期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="当季主推目"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="下季度新品"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="意见反馈">
    </el-table-column>
    <el-table-column
      prop="branch"
      label="优秀分店">
    </el-table-column>
  </el-table>
  </div>

</template>

<script>
    export default {
        name: "Goods",
      data() {
        return {
          tableData: [{
            date: '2018-06-01',
            name: '加量套餐',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          }, {
            date: '2018-07-01',
            name: '口味汉堡',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          }, {
            date: '2018-08-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          },{
            date: '2018-09-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          },{
            date: '2018-10-01',
            name: '特殊单品',
            address: '是否反馈分店销售意见'
          },{
            date: '2018-11-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          },{
            date: '2018-12-01',
            name: '特殊单品',
            address: '是否反馈分店销售意见'
          },{
            date: '2019-01-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          },{
            date: '2019-02-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          },{
            date: '2019-02-01',
            name: '特殊单品',
            address: '是否反馈分店销售意见'
          },{
            date: '2019-02-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          },{
            date: '2019-02-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          },{
            date: '2019-02-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          },{
            date: '2019-02-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          },{
            date: '2019-02-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          },{
            date: '2019-02-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          },{
            date: '2019-02-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          },{
            date: '2019-02-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          },{
            date: '2019-02-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          },{
            date: '2019-02-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          },{
            date: '2019-02-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          },{
            date: '2019-02-01',
            name: '特殊单品',
            branch:'北京中南海分店',
            address: '是否反馈分店销售意见'
          }

          ],
          loading: true
        };
      },
      methods:{
          clickme(){
            this.$notify({
              title:"连接失败!",
              message:"权限不足，请先登录!",
              type:"error"
            });
            console.log("提示报错");
          }
      }
    }
</script>

<style scoped>
   /*.goods_box{*/
     /*background-color: #2c3e50;*/
   /*}*/
   /*.el-loading-spinner .el-loading-text {*/
     /*color: #409EFF;*/
     /*margin: 14px 0;*/
     /*font-size: 20px;*/
   /*}*/
</style>
