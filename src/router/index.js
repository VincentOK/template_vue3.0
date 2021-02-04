import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]
const files = require.context('./module', true, /\.js$/);
files.keys().forEach((key) => {
  routes = routes.concat(files(key).default);
});
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
/**
 * 全局路由钩子
 */
router.beforeEach((to,from,next)=>{
  console.log("to",to)
  console.log("to",from)
  /**
   *
   */
  next();
})
export default router
