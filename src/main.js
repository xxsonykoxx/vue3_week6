import { createApp } from 'vue';
import { axios } from 'axios';
import { VueAxios } from 'vue-axios';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faUserSecret, faCat } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';
import router from './router';

// library.add(faUserSecret, faCat);

createApp(App)
  .use(router, VueAxios, axios)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');

// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.getItem('token') === 'ImLogin';
//   if (to.meta.requiresAuth) {
//     if (isLogin === true) {
//       next();
//     } else {
//       next({ path: '/Login' });
//     }
//   } else {
//     next();
//   }
// });
