<template>
  <el-dialog
  append-to-body
    top='1vh'
    :title="title"
    :visible="visible"
    :width="width + 'px'"
    :before-close="onClose"
  >
    <div class="containner" :style="{ height: height + 'px' }">
      <slot name="content"></slot>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="danger" @click="onClose()">取 消</el-button>
      <el-button type="primary" @click="onConfirm()">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "标题",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 250,
    },
  },
  methods: {
    //关闭事件
    onClose() {
      this.$emit("onClose");
    },
    //确认事件
    onConfirm() {
      this.$emit("onConfirm");
    },
  },
};
</script>

<style lang="scss" scoped>
.containner{
  overflow-x: initial;
  overflow-y: auto;
}
.el-dialog__wrapper {
  ::v-deep .el-dialog {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    .el-dialog__header {
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
      background-color: #1890ff;
      .el-dialog__title {
        color: #fff;
        font-size: 16px;
        font-weight: 600;
      }
      .el-dialog__close {
        color: #fff;
      }
    }
    .el-dialog__body {
      padding: 10px;
    }
    .el-dialog__footer {
      border-top: 1px solid #e8eaec !important;
      padding: 10px;
    }
  }
}
</style>