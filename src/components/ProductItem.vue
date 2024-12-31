<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">CARD</h4>
      <p class="card-text">iPhone 12 Pro</p>
    </div>
    <p>Get inject {{ user }}</p>
    <div class="card-footer d-flex gap-1">
      <button @click="handleSelect('Product1')" type="button" class="btn btn-primary">Add to Cart</button>
      <button type="button" class="btn btn-warning">See more</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    handleSelect(payloads) {
      console.log('>>>>',payloads);
      this.$emit('customHandleSelect');
    },
  },
  inject: ['user']
}
</script>