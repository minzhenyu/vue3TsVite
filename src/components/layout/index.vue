<template>
    <div>
        {{name}}
        段子
        {{res}}
    </div>
   <el-container>
  <el-header>Header</el-header>
  <el-main>Main</el-main>
  <el-footer>Footer</el-footer>
</el-container>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import index from './index'
import axios from 'axios'
export default defineComponent({
    name:'Layout',
    props:{
  msg: String
},
data(){
    return {
        res:'1111',
        name:'layout'
    }
},
mounted(){
  // vue-element-admin/article/code
  // https://api.apiopen.top/getJoke?page=1&count=2&type=image
    axios.get('/vue-element-admin/article/list').then(res=>{
      console.log(res)
      this.res=res.data
    })
}
})
</script>

<style lang='scss'>
 .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>