<template>
  <el-container>
    <!-- 侧边栏开始 -->
    <el-aside :width="isCollapse? '56px': '256px'">
      <div class="logo">Logo</div>
      <el-menu :router="true" :collapse="isCollapse" default-active="2" background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b" :collapse-transition="false">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="/page1">page1</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="/page2">page1</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 侧边栏结束 -->

    <!-- 右侧内容开始 -->
    <el-container>
      <!-- 头部开始 -->
      <el-header>
        <div class="header-left">
          <div class="close-icon" @click="changeMenuStatus">
            <i :class="isCollapse? 'el-icon-s-unfold-active': ''" class="el-icon-s-unfold" size="small"></i>
          </div>
          <div class="breadcrumb-container">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div class="header-right">

          <el-dropdown size="mini" placement="bottom-end">
            <div class="user-icon-container">
              <el-avatar class="avatar" size="small"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
              <i class="el-icon-caret-bottom"></i>
            </div>

            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <!-- 头部结束 -->
      <el-main>
        <div class="main-content">
          <!-- 视图 -->
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
    <!-- 右侧内容结束 -->
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      }
    },
    methods: {
      changeMenuStatus() {
        console.log('1');
        this.isCollapse = !this.isCollapse
      }
    },
    mounted() {
      //this.$message('sss')
    }
  }

</script>

<style lang="scss" scope>
  .el-container {
    height: 100%;
    .el-aside {
      display: flex;
      flex-direction: column;
      background-color: rgb(84, 92, 100);
      color: #333;
      transition: all .3s;
      .logo {
        height: 64px;
        line-height: 64px;
        text-align: center;
        background-color: rgb(84, 92, 100);
        color: #fff;

      }
      .el-menu {
        flex: 1;
        border: none;
      }

    }
    .el-header {
      display: flex;
      padding: 0 20px;
      justify-content: space-between;
      align-items: center;
      height: 64px;
      color: #333;
      .header-left {
        display: flex;
        align-items: center;
        .close-icon {
          font-size: 26px;
        }
        .el-icon-s-unfold {
          cursor: pointer;
          transform: rotate(180deg);
          transition: all .3s;
        }
        .el-icon-s-unfold-active {
          transform: rotate(0);
        }
        .breadcrumb-container {
          margin-left: 30px;
        }
      }

      .header-right {
        display: flex;
        align-items: center;
        margin-right: 10px;
        cursor: pointer;
        .user-icon-container {
          display: flex;
          align-items: center;
          .avatar {
            margin-right: 4px;
          }
        }
      }
    }

    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      height: 100%;
      overflow: scroll;
      .main-content {
        background-color: #fff;
        min-height: 100%;
      }
    }

  }

</style>
