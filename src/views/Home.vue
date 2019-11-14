<template>
  <div id="wrapper">
    <MyTable
      :loading="tableDataSet.loading"
      :table-data="tableDataSet.tableData"
      :table-label="tableDataSet.tableLabel"
      :table-option="tableDataSet.tableOption"
      :table-checkbox="tableDataSet.tableCheckbox"
      @handleButton="handleButton"
      @handleSortChange="handleSortChange"
      @handleSelectionChange="handleSelectionChange"
    ></MyTable>
    <div style="height:20px;"></div>
    <MyPage
      align="right"
      :pager="pager"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    ></MyPage>
  </div>
</template>

<script>
import MyTable from "@/components/common/MyTable.vue";
import MyPage from "@/components/common/MyPage.vue";
import { apiAddress } from '@/request/api';
export default {
  components: {
    MyTable,
    MyPage
  },
  data() {
    return {
      tableDataSet: {
        loading: false,
        tableData: [],
        tableLabel: [
          {
            label: "人员编号",
            param: "id",
            align: "center",
            sortable: true //排序
          },
          {
            label: "姓名",
            param: "name",
            align: "center",
            sortable: true
          },
          {
            label: "部门",
            param: "section",
            align: "center",
            sortable: true,
            filters: [{ text: "111", value: "111" }]
          },
          {
            label: "权限",
            param: "jurisdiction",
            align: "center",
            sortable: true,
            render: row => {
              if (row.jurisdiction === 0) {
                return "管理员";
              } else if (row.jurisdiction === 1) {
                return "执事长";
              } else if (row.jurisdiction === 2) {
                return "员工";
              } else {
                return "禁用";
              }
            }
          },
          {
            label: "联系方式",
            param: "phone",
            align: "center",
            sortable: true
          }
        ],
        tableOption: {
          label: "操作",
          width: "180",
          options: [
            {
              label: "编辑",
              type: "primary",
              icon: "el-icon-edit-outline",
              methods: "updata"
            },
            {
              label: "查看",
              type: "primary",
              icon: "el-icon-view",
              methods: "details"
            }
          ]
        },
        tableCheckbox: false //多选框
      },
      pager: {
        count: 20, //总条数
        page: 1, //当前页码
        rows: 10 //显示条数
      }
    };
  },
  methods: {
    //点击按钮
    handleButton(methods, row, index) {
      console.log(methods, row, index);
    },
    //排序
    handleSortChange(val) {
      console.log(val);
    },
    handleSelectionChange(val) {
      console.log(val);
    },
    //显示条数
    handleSizeChange(rows) {
      let vm = this;
      vm.pager.rows = rows;
      console.log(vm.pager);
    },
    //当前页码
    handleCurrentChange(page) {
      let vm = this;
      vm.pager.page = page;
      console.log(this.pager);
    },
    handleLoad() {
      let vm = this;
      vm.tableDataSet.loading=true
      apiAddress().then(result => {
          vm.tableDataSet.tableData = result.tableData;
          vm.pager = result.pager;
          vm.tableDataSet.loading=false
          console.log(result);
        }).catch(arr=>{
          console.log(arr,"arr")
        })
    }
  },
  created() {
    let vm = this;
    vm.handleLoad()
    console.log(this.$route);
  }
};
</script>
<style lang="scss" scoped>
</style>
