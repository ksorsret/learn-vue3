<template>
  <div>
    <button>DangChieu</button>
    <button>SapChieu</button>
    <KeepAlive>
      <component :is="LoaiPhim" />
    </KeepAlive>
  </div>
</template>

<script>
import DangChieu from './DangChieu.vue'
import SapChieu from './SapChieu.vue'

export default {
  components: {
    DangChieu,
    SapChieu
  },
  data() {
    return {
      LoaiPhim: 'DangChieu'
    }
  }
}
</script>

<style>

</style>