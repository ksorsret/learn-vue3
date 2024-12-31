<template>
<!-- The Modal -->
<div class="modal fade" :id="idModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">{{ modalTitle }}</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <slot></slot>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="$emit('submitForm')">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    idModal: {
      type: String,
    },
    modalTitle: {
      type: String,
      default: 'Default Modal Title',
    },
  }
}
</script>

<style>

</style>