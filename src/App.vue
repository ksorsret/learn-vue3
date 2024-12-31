<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import FormVueX from './components/FormVueX/FormVueX.vue';
// import DemoForm from './components/DemoForm.vue';
// import AppModal from './components/AppModal.vue';
// import ProductItem from './components/ProductItem.vue';
// import Demo1Slot from './components/Demo1Slot.vue';
// import Demo2Slot from './components/Demo2Slot.vue';
// import BaseModal from './components/BaseModal.vue';

export default {
  components: {
    FormVueX
    // AppModal,
    // ProductItem,
    // Demo1Slot,
    // Demo2Slot,
    // BaseModal
    // DemoForm
  },
  data() {
    return {
      // showModal: false,
    };
  },
  methods: {
  //   doSomething() {
  //     console.log('Custom event triggered');
  //   },
  //   handleOpen() {
  //     this.showModal = true;
  //   },
  //   handleClose() {
  //     this.showModal = false;
  //   }
  // },
  // provide() {
  //   return {
  //     user: 'SretK'
  //   };
  }
}
</script>

<template>
  <div class="wp-app">
    <!-- <div class="container mt-3">
      <div class="row">
        <div class="col-sm-3">
          <button @click="handleOpen" class="btn btn-sm btn-primary">Show</button>
        </div>
      </div>
      <hr>
      <Teleport to="body">
        <AppModal :isShow="showModal" :closeModalFn="handleClose">
          List cart item
        </AppModal>
      </Teleport>
    </div> -->
    <div class="container">
      <FormVueX />
    </div>
  </div>
</template>

<style scoped>
</style>
