<template>
  <div>
    <Table :columns="columns" :data="data"></Table>
    <Page class="pagination" :total="40" size="small" show-elevator show-sizer :page-size="20"></Page>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        columns: [
          {
            title: '姓名',
            key: 'name'
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
            key: 'vocation'
          },
          {
            title: '身份证',
            key: 'id'
          },
          {
            title: '注册时间',
            key: 'create_time'
          },
          {
            title: '登录时间',
            key: 'login_time'
          },
          {
            title: '状态',
            key: 'status'
          },
          {
            title: '审核',
            key: 'examine'
          },
          {
            title: '认证',
            key: 'auth'
          },
          {
            title: '操作',
            key: 'active',
            render: (h, p) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click () {
                      alert(1)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        data: [
          {
            name: '张三',
            age: '19',
            sex: '男',
            vocation: '程序员',
            id: '11011111',
            create_time: '2017-12-1 14:00',
            login_time: '2017-12-3 11:00',
            status: '在线',
            examine: '未审核',
            auth: '未认证'
          },
          {
            name: '张三',
            age: '19',
            sex: '男',
            vocation: '程序员',
            id: '11011111',
            create_time: '2017-12-1 14:00',
            login_time: '2017-12-3 11:00',
            status: '在线',
            examine: '未审核',
            auth: '未认证'
          },
          {
            name: '张三',
            age: '19',
            sex: '男',
            vocation: '程序员',
            id: '11011111',
            create_time: '2017-12-1 14:00',
            login_time: '2017-12-3 11:00',
            status: '在线',
            examine: '未审核',
            auth: '未认证'
          },
          {
            name: '张三',
            age: '19',
            sex: '男',
            vocation: '程序员',
            id: '11011111',
            create_time: '2017-12-1 14:00',
            login_time: '2017-12-3 11:00',
            status: '在线',
            examine: '未审核',
            auth: '未认证'
          },
          {
            name: '张三',
            age: '19',
            sex: '男',
            vocation: '程序员',
            id: '11011111',
            create_time: '2017-12-1 14:00',
            login_time: '2017-12-3 11:00',
            status: '在线',
            examine: '未审核',
            auth: '未认证'
          },
          {
            name: '张三',
            age: '19',
            sex: '男',
            vocation: '程序员',
            id: '11011111',
            create_time: '2017-12-1 14:00',
            login_time: '2017-12-3 11:00',
            status: '在线',
            examine: '未审核',
            auth: '未认证'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .pagination {
    margin-top: 15px;
    text-align: right;
  }
</style>