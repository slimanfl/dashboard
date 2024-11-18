import { useCookie } from '@/@core/composable/useCookie';
import { setupLayouts } from 'virtual:generated-layouts';
import { createRouter, createWebHistory } from 'vue-router/auto';

function recursiveLayouts(route) {
 
    if (route.children) {
      for (let i = 0; i < route.children.length; i++)
        route.children[i] = recursiveLayouts(route.children[i])
      
      return route
    }
    return setupLayouts([route])[0]

}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash)
      return { el: to.hash, behavior: 'smooth', top: 60 }
    
    return { top: 0 }
  },
  extendRoutes: pages => [
    ...[...pages].map(route => recursiveLayouts(route)),
  ],

})
router.beforeEach((to, from, next) => {
  const token = useCookie('accessToken').value;
  if (!token && to.path !== '/login') {
    next('/login');
  } else {
    next();
  }
});
export { router };
export default function (app) {
  app.use(router)
}
