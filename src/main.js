import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const app = createApp(App);

const store = createStore({
  state() {
    return {
      counter: 0,
      users: [
        {
          id: 1,
          name: 'Alice',
          age: 25
        }, 
        {
          id: 2,
          name: 'Bob',
          age: 30
        }
      ],
      searchName: 'Bob',
    };
  },
  getters: {
    userByBoy(state) {
      return state.users.filter(user => user.age > 29);
    },
    userBySearch(state) {
      return state.users.filter(user => user.name.toLowerCase().includes(state.searchName.toLowerCase()));
    }
  },
  mutations: {
    setSearchNameMutation(state) {
      state.searchName = 'Bob';
    },
    addUserMutation(state, payload) {
      state.users.push(payload);
    },
    deleteUserMutation(state, payload) {
      const index = state.users.findIndex(user => user.id === payload);
      if (index > -1) {
        state.users.splice(index, 1);
      }
    }
  },
  actions: {
    setSearchNameAction({ commit }, payload) {
      commit('setSearchNameMutation');
    },
    addUserAction({ commit }, payload) {
      console.log('addUserMutation', payload);
      commit('addUserMutation', payload);
    },
    deleteUserAction({ commit }, payload) {
      commit('deleteUserMutation', payload);
    }
  }
});
app.use(store);
app.mount('#app');
