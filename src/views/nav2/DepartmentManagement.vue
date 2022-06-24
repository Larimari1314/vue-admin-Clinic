<template>
  <section>
    <!--列表-->
    <template>
<!--      <a href="/?#/DepartmentDoctorList">www</a>-->
      <el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;text-align: center">
        <el-table-column prop="imgUrl" width="300" label="科室封面" scope="scope">
          <template scope="scope">
            <div style="text-align:center;">
              <img :src="users[scope.$index].imgUrl" style="border-radius:25%; " width="250" height="150"
                   alt="科室照片">
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="departmentName" label="科室名称" width="120">
        </el-table-column>
        <el-table-column prop="departmentIntroduce" label="科室介绍" width="680">
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template scope="scope">
            <el-button type="info" size="small" @click="handleEdit(scope.$index, scope.row)">查看所属医师</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

  </section>
</template>
<script>
//import NProgress from 'nprogress'
import {
findAllDepartment
} from '../../api/api';
export default {
  data() {
    return {
      loading: false,
      users: []
    }
  },
  methods: {

    handleEdit:function (index,row){
      this.$router.push(
          {
            //添加需要传值到那个页面的路径
            path:'DepartmentDoctorList',
            //携带需要传递的参数
            query:{id:row.id}
          })
    },
    //获取用户列表
    getDepartment: function () {
      this.loading = true;
      //NProgress.start();
      findAllDepartment().then((res) => {
        if(res.data.code==='200'){
          this.users = res.data.data;
          this.loading = false;
        }else{
          this.$notify.error({
            title: '错误',
            message: res.data.message
          });
        }
        //NProgress.done();
      });
    }
  },
  mounted() {
    this.getDepartment();
  }
};

</script>

<style scoped>

</style>