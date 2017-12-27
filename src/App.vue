<template>
  <div id="app">
    <div class="layout">
      <Sider :style="{ position: 'fixed', height: '100vh', left: 0, overflow: 'auto' }">
        <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
                用户管理
            </template>
            <MenuItem name="1-1">用户列表</MenuItem>
            <MenuItem name="1-2">管理员列表</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
                认证管理
            </template>
            <MenuItem name="2-1">用户认证</MenuItem>
            <MenuItem name="2-2">管理员认证</MenuItem>
            <MenuItem name="2-3">组认证</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
                内容管理
            </template>
            <MenuItem name="3-1">内容列表</MenuItem>
            <MenuItem name="3-2">软文发布</MenuItem>
            <MenuItem name="3-2">素材</MenuItem>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
                审核管理
            </template>
            <MenuItem name="3-1">用户</MenuItem>
            <MenuItem name="3-2">管理员</MenuItem>
            <MenuItem name="3-2">组</MenuItem>
            <MenuItem name="3-2">内容</MenuItem>
            <MenuItem name="3-2">活动</MenuItem>
          </Submenu>
          <Submenu name="5">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
                权限管理
            </template>
            <MenuItem name="3-1">列表</MenuItem>
            <MenuItem name="3-2">分组</MenuItem>
          </Submenu>
          <Submenu name="6">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
                组成员
            </template>
            <MenuItem name="3-1">列表</MenuItem>
            <MenuItem name="3-2">设置</MenuItem>
          </Submenu>
          <Submenu name="7">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
                活动管理
            </template>
            <MenuItem name="3-1">列表</MenuItem>
          </Submenu>
          <Submenu name="8">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
                日志管理
            </template>
            <MenuItem name="3-1">列表</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout :style="{marginLeft: '200px'}" class="container">
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
        <Content :style="{padding: '0 16px 16px'}">
          <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem>用户管理</BreadcrumbItem>
            <BreadcrumbItem>用户列表</BreadcrumbItem>
            <!-- <BreadcrumbItem>Layout</BreadcrumbItem> -->
          </Breadcrumb>
          <Card>
            <router-view/>
          </Card>
        </Content>
      </Layout>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  html, body, #app {
    height: 100%;
  }
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }
  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
</style>
