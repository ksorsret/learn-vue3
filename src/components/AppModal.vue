<template>
  <div v-if="isShow" class="app-modal">
    <div class="app-modal-container">
      <div class="app-modal-header">
        <h4>Title Modal</h4>
        <button class="close-btn">&times;</button>
      </div>
      <div class="app-modal-body">
        <slot></slot>
      </div>
      <div class="app-modal-footer">
        <button class="btn btn-primary btn-sm">OK</button>
        <button @click="handleClose" class="btn btn-default">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Modal Title'
    },
    isShow: {
      type: Boolean,
      default: false
    },
    closeModalFn: Function
  },
  methods: {
    handleClose() {
      // this.$emit('closeModalFn'); //Có thể emit sự kiện lên (@handleA)->this.$emit('handleA')
      this.closeModalFn(); // Truyền 1 hàm dưới dạng Props (:handleCloseFn=closeFn)
    }
  }
}
</script>

<style scoped>
.app-modal {
  position: fixed;
  top: 0;
  left: 0;
  background: #0000001c;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-modal-header, .app-modal-body {
  display: flex;
  border-bottom: 1px solid black;
}
.app-modal-container {
  width: 600px;
  border: 1px solid gray;
  background: #fff;
  padding: 10px;
}
</style>