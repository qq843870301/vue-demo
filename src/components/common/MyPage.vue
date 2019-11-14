<template>
  <div class="mod-paging-query fn-clear">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pager.page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pager.rows"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pager.count"
      :align="align"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    pager: {
      type: Object,
      required: true
    },
    align: {
      type: String,
      required: false
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("handleSizeChange", val);
    },
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
    }
  }
};
</script>