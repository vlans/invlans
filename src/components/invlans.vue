<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
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
          <MenuItem name="2-1">列表</MenuItem>
          <MenuItem name="2-2">列表</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            内容管理
          </template>
          <MenuItem name="3-1">列表</MenuItem>
          <MenuItem name="3-2">列表</MenuItem>
        </Submenu>
        <Submenu name="4">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            审核管理
          </template>
          <MenuItem name="4-1">列表</MenuItem>
          <MenuItem name="4-2">列表</MenuItem>
        </Submenu>
        <Submenu name="5">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            权限管理
          </template>
          <MenuItem name="5-1">列表</MenuItem>
          <MenuItem name="5-2">列表</MenuItem>
        </Submenu>
        <Submenu name="6">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            组成员&nbsp;&nbsp;&nbsp;&nbsp;
          </template>
          <MenuItem name="6-1">列表</MenuItem>
          <MenuItem name="6-2">列表</MenuItem>
        </Submenu>
        <Submenu name="7">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            活动管理
          </template>
          <MenuItem name="7-1">列表</MenuItem>
          <MenuItem name="7-2">列表</MenuItem>
        </Submenu>
        <Submenu name="8">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            日志管理
          </template>
          <MenuItem name="8-1">列表</MenuItem>
          <MenuItem name="8-2">列表</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>用户管理</BreadcrumbItem>
          <BreadcrumbItem>用户列表</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <div style="height: 600px">
            <ul>
              <li>
                <router-link to="/user">/user</router-link>
              </li>
              <li>
                <router-link to="/other">/other</router-link>
              </li>
            </ul>
            <router-view class="view one"></router-view>
            <router-view class="view two" name="a"></router-view>
            <router-view class="view three" name="b"></router-view>
            <template>
              <Table border :columns="columns7" :data="data6"></Table>
            </template>
            <template>
              <Page :total="20" size="small" show-elevator show-sizer></Page>
            </template>

          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'invlans',
  data () {
    return {
//      msg: 'Welcome to Your Vue.js App'
      columns7: [
        {
          title: '姓名',
          key: 'name',
          render: (h, params) => {
            return h('div', [
//              h('Icon', {
//                props: {
//                  type: 'person'
//                }
//              }),
              h('strong', params.row.name)
            ]);
          }
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '性别',
          key: 'sex'
        },
        {
          title: '职业',
          key: 'occupation'
        },
        {
          title: '身份证',
          key: 'idCard'
        },
        {
          title: '注册时间',
          key: 'registrationTime'
        },
        {
          title: '登录时间',
          key: 'loginTime'
        },
        {
          title: '状态',
          key: 'status'
        },
        {
          title: '审核',
          key: 'examineAndVerify'
        },
        {
          title: '认证',
          key: 'attestation'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '编辑'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '删除')
            ]);
          }
        }
      ],
      data6: [
        {
          name: '张三',
          age: 18,
          sex : '男',
          occupation: '程序员',
          idCard: '430703',
          registrationTime: '2017-12-80 0:09',
          loginTime: '2017-12-80 0:10',
          status: '在线',
          examineAndVerify: '未审核',
          attestation: '未认证'
        },
        {
          name: '张三',
          age: 18,
          sex : '男',
          occupation: '程序员',
          idCard: '430703',
          registrationTime: '2017-12-80 0:09',
          loginTime: '2017-12-80 0:10',
          status: '在线',
          examineAndVerify: '未审核',
          attestation: '未认证'
        },
        {
          name: '张三',
          age: 18,
          sex : '男',
          occupation: '程序员',
          idCard: '430703',
          registrationTime: '2017-12-80 0:09',
          loginTime: '2017-12-80 0:10',
          status: '在线',
          examineAndVerify: '未审核',
          attestation: '未认证'
        },
        {
          name: '张三',
          age: 18,
          sex : '男',
          occupation: '程序员',
          idCard: '430703',
          registrationTime: '2017-12-80 0:09',
          loginTime: '2017-12-80 0:10',
          status: '在线',
          examineAndVerify: '未审核',
          attestation: '未认证'
        },
        {
          name: '张三',
          age: 18,
          sex : '男',
          occupation: '程序员',
          idCard: '430703',
          registrationTime: '2017-12-80 0:09',
          loginTime: '2017-12-80 0:10',
          status: '在线',
          examineAndVerify: '未审核',
          attestation: '未认证'
        },
        {
          name: '张三',
          age: 18,
          sex : '男',
          occupation: '程序员',
          idCard: '430703',
          registrationTime: '2017-12-80 0:09',
          loginTime: '2017-12-80 0:10',
          status: '在线',
          examineAndVerify: '未审核',
          attestation: '未认证'
        }
      ]
    }
  },
  methods: {
    show (index) {
      this.$Modal.info({
        title: 'User Info View',
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Sex：${this.data6[index].sex}<br>Occupation：${this.data6[index].occupation}<br>IdCard：${this.data6[index].IdCard}<br>RegistrationTime：${this.data6[index].registrationTime}<br>LoginTime：${this.data6[index].loginTime}<br>Status：${this.data6[index].status}<br>ExamineAndVerify：${this.data6[index].examineAndVerify}<br>Attestation：${this.data6[index].attestation}`
      })
    },
    remove (index) {
      this.data6.splice(index, 1);
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .ivu-breadcrumb{
    text-align: left;
  }
  /*表格*/

   /*分页*/
  .ivu-page{
    text-align: right;
    margin: 20px 0;
  }
</style>
