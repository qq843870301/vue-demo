<template>
  <!-- 添加人员 -->
  <div>
    <me-form
      size="mini"
      labelWidth="80px"
      align="center"
      :searchData="formData.searchData"
      :searchForm="formData.searchForm"
      :searchHandle="formData.searchHandle"
    ></me-form>
  </div>
</template>

<script>
let sexs = [{ label: "男", value: "M" }, { label: "女", value: "F" }];
let sexProps = { label: "label", value: "value" };
let intersts = [
  { label: "羽毛球", value: "badminton" },
  { label: "篮球", value: "basketball" },
  { label: "足球", value: "football" },
  { label: "兵乓球", value: "pong" }
];
let interstProps = { label: "label", value: "value" };
import MeForm from "@/components/common/MyForm.vue";
export default {
  components: { MeForm },
  data() {
    return {
      formData: {
        searchData: {
          name: null,
          age: null,
          sex: null,
          date: "",
          interst: []
        },
        searchForm: [
          {
            type: "Input",
            label: "姓名",
            prop: "name",
            width: "180px",
            placeholder: "请输入姓名"
          },
          {
            type: "Input",
            label: "年龄",
            prop: "age",
            width: "180px",
            placeholder: "请输入年龄"
          },
          {
            type: "Date",
            label: "日期",
            prop: "date",
            width: "180px",
            placeholder: "请选择日期"
          },
          {
            type: "Select",
            label: "性别",
            prop: "sex",
            width: "120px",
            options: sexs,
            props: sexProps,
            change: row => "",
            placeholder: "请选择性别"
          },
          {
            type: "Checkbox",
            label: "爱好",
            prop: "interst",
            checkboxs: intersts,
            props: interstProps
          },
          {
            type: "Button",
            BtnType: "primary",
            size: "mini",
            label: "开启视频",
            handle: () => console.log(1)
          }
        ],
        //按钮
        searchHandle: [
          {
            label: "查询",
            type: "primary",
            size: "mini",
            handle: () => this.searchHandleForm()
          },
          { label: "重置", type: "primary", handle: () => "" }
        ],
        // 表单验证
        editRules: {
          name: [{ requied: true, message: "请输入姓名", trigger: "blur" }]
        }
      },
    };
  },
  methods: {
    
  }
};
</script>
<style lang="scss" scoped>
</style>