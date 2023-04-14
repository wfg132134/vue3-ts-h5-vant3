import { createRouter,createWebHashHistory,RouteRecordRaw } from 'vue-router';

// 添加类型校验
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "index",
    redirect: '/home',
    component: ()=>import('@/components/index.vue'),
    meta:{
      isAuth: false,
      title: '主页'
    },
    // 该路由下展示的子路由，必须在路由组件中写router-view标签才能展示
    children: [
      {
        path: "/home",
    // 可以为路由进行命名,可以通过name进行路由跳转
        name: "home",
        component: ()=>import('@/components/HomePage.vue'),
        meta:{
          isAuth: false,
          title: '主页'
        },
      },
      {
        path: "/about",
        name: "about",
        component: ()=>import('@/components/AboutPage.vue'),
        meta:{
          isAuth: true,
          title: '关于'
        }
      },
      {
        path: "/detail",
        name: "detail",
        component: ()=>import('@/components/DetailPage.vue'),
        meta:{
          isAuth: false,
          title: '详情'
        }
      },
      {
        path: "/form",
        name: "form",
        component: ()=>import('@/components/common/form/index.vue'),
        meta:{
          isAuth: false,
          title: '详情'
        }
      },
    ]
  },
]

// 创建router
const router = createRouter({
  // 配置为Hash模式
  history: createWebHashHistory(),
  // 配置toures
  routes,
  // 路由跳转时返回顶部
  scrollBehavior () {
      return {top: 0}
  }
})

// 设置前置路由守卫
router.beforeEach((to, from, next) => {
  
  next()
})

// 设置后置路由守卫
router.afterEach((to, from, failure) => {
  
})

export { router }