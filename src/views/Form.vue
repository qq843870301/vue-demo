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
          id: null,
          pwd: null,
          address: null,
          phone: null,
          department_id: null,
          role: null,
          sex: null,
          interst: []
        },
        searchForm: [
          {
            type: "Input",
            label: "姓名",
            prop: "name",
            width: "200px",
            placeholder: "请输入姓名"
          },
          {
            type: "Input",
            label: "编号",
            prop: "id",
            width: "200px",
            disabled: true
          },
          {
            type: "Input",
            label: "密码",
            prop: "pwd",
            width: "200px",
            disabled: true
          },
          {
            type: "Select",
            label: "部门",
            prop: "address",
            width: "200px",
            options: [{ label: "男", value: "M" }, { label: "女", value: "F" }],
            props: sexProps,
            change: row => "",
            placeholder: "请选择部门"
          },
          {
            type: "Input",
            label: "联系方式",
            prop: "phone",
            width: "200px",
            placeholder: "请输入联系方式"
          },
          {
            type: "Input",
            label: "地址",
            prop: "department_id",
            width: "200px",
            placeholder: "请输入地址"
          },
          {
            type: "Select",
            label: "权限",
            prop: "role",
            width: "200px",
            options: [
              { label: "数据管理员", value: "2" },
              { label: "会议管理者", value: "3" },
              { label: "普通用户", value: "4" }
            ],
            props: sexProps,
            change: row => "",
            placeholder: "请选择权限"
          },
          {
            type: "Select",
            label: "性别",
            prop: "sex",
            width: "200px",
            options: sexs,
            props: sexProps,
            change: row => "",
            placeholder: "请选择性别"
          },
          {
            type: "Button",
            BtnType: "primary",
            size: "mini",
            label: "人脸录制",
            text: "开始录制",
            handle: () => (this.dialogTableVisible2 = true)
          },
          {
            type: "Button",
            BtnType: "primary",
            size: "mini",
            label: "声纹录制",
            text: "开始录制",
            handle: () => (this.dialogTableVisible = true)
          },
          {
            type: "Button",
            BtnType: "primary",
            size: "mini",
            label: "语音录制",
            text: "开始录制",
            handle: () => (this.dialogTableVisible1 = true)
          }
        ],
        //按钮
        searchHandle: [
          {
            label: "提交",
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