import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},
  routes: [
    {path:'/',component:'@/layouts/index',
    routes:[{ path: '/', component: '@/pages/layout/index' },
    { path: '/submenu-item-4item-2', component: '@/pages/Element/index' },]
  }
  ],
  fastRefresh: {},
});

