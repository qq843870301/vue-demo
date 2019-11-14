<template>
  <el-table
    ref="table"
    v-loading="loading"
    element-loading-text="加载中"
    :data="tableData"
    border
    fit
    highlight-current-row
    tooltip-effect="dark"
    style="width:100%"
    @sort-change="handleSortChange"
    @selection-change="handleSelectionChange"
  >
    <el-table-column
      v-if="tableCheckbox"
      align="center"
      width="40px"
      :type="tableCheckbox?'selection':false"
    ></el-table-column>
    <el-table-column
      v-for="(item,index) in tableLabel"
      :width="item.width ? item.width : ''"
      :key="index"
      :align="item.align"
      :label="item.label"
      :prop="item.param"
      :sortable="item.sortable ? 'custom' : false"
      :filters="item.filters"
      :filter-method="item.filters?filterHandler:item.filters"
    >
      <template slot-scope="scope">
        <span v-if="item.render">{{item.render(scope.row)}}</span>
        <span v-else>{{scope.row[item.param]}}</span>
      </template>
    </el-table-column>
    <el-table-column
      v-if="tableOption.label"
      :width="tableOption.width"
      :label="tableOption.label"
      align="center"
      class-name="small-padding fixed-width"
    >
      <template slot-scope="scope">
        <el-button
          v-for="(item,index) in tableOption.options"
          :key="index"
          :type="item.type"
          :icon="item.icon"
          @click="handleButton(item.methods,scope.row,scope.row)"
          size="mini"
        >{{item.label}}</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    tableData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    tableLabel: {
      type: Array,
      default: () => {
        return [];
      }
    },
    tableOption: {
      type: Object,
      default: () => {
        return {};
      }
    },
    tableCheckbox: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    // 按钮事件
    handleButton(methods, row, index) {
      this.$emit("handleButton", { methods: methods, row: row, index: index });
    },
    // 排序
    handleSortChange(val) {
      this.$emit("handleSortChange", val);
    },
    //改变项
    handleSelectionChange(val) {
      this.$emit("handleSelectionChange", val);
    },
    //过滤
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    }
  }
};
</script>

<style>
</style>