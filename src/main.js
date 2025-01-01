import { createApp } from 'vue';
import App from './App.vue';
import { store } from './store';
import User from './pages/User.vue';
import Product from './pages/Product.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/users',
    component: User,
    alias: '/',
    name: 'user.index',
  },
  {
    path: '/products',
    component: Product
  }
];
const router = createRouter({
  history: createWebHistory(), // khi click nút back trong browser
  routes,
  linkActiveClass: 'active',
})

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
