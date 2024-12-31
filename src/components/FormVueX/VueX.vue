<template>
  <div class="card">
    <div class="card-header">
      <input type="text" class="form-control">
      <button class="btn btn-primary btn-sm">Search</button>
    </div>
    <div class="card-body">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUserModal">
        Open modal
      </button>
      <modal idModal="addUserModal" modalTitle="Add user" @submitForm="handleAddUser(form)">
        <input v-model="form.name" type="text" name="name" class="form-control mb-3" placeholder="Name">
        <input v-model="form.age" type="number" name="age" class="form-control mb-3" placeholder="Age">
      </modal>
    </div>
  </div>
  <table class="table table-bordered mt-5">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in users" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>
          <button type="button" class="btn btn-primary btn-sm">Edit</button>
          <button type="button" class="btn btn-danger btn-sm" @click="handleRemove(item)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Modal from '../Modal/Modal.vue';
const {mapActions, mapState, mapGetters} = createNamespacedHelpers('user'); // module user để lấy các action, state,...

export default {
  data() {
    return {
      form: {
        name: '',
        age: 0
      }
    };
  },
  components: { Modal },
  //Ko nên truy cập quá nhiều vào biến hệ thống $store

  // computed: {
  //   userList() {
  //     return this.$store.state.users;
  //   }
  // }

  //Nên làm
  computed: {
    //lấy dữ liệu từ vuex
    ...mapState({
      users: (state) => state.users //state là state trên vuex, có sử dụng module namespaced
    }),
    //lấy dữ liệu đã lọc từ trên store
    ...mapGetters({
      userByBoy: 'userByBoy', //user là tên module
      userBySearch: 'userBySearch', //user là tên module
    }),
    //tự tạo trong componnet
    fullName() {
      return 1+2;
    }
  },
  methods: {
    ...mapActions({
      // handleSearch: 'fetchUsers',
      handleAddUser: 'addUserAction', //user/addUserAction(ko nên viết) là tên module
      handleRemove: 'deleteUserAction' //user là tên module
    }),
  }
}
</script>

<style>
  button + button {
    margin-left: 5px;
  }
</style>