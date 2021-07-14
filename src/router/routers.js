import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index'
import webide from '@/views/webIde'
Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/sqlEditer',
    component: () => import('@/views/webIde/sqlEditer'),
    name: 'sqlEditer',
    meta: { title: 'sql编辑器', noCache: true }
  },
  {
    path: '/newPage',
    component: Layout,
    redirect: 'noredirect',
    meta: { title: '新页面', icon: 'index', noCache: true },
    children: [
      {
        // path: '/clusters',
        // component: Layout,
        // redirect: 'noredirect',
        // children: [
        //   {
        path: 'addClusters',
        component: () => import('@/views/clusters/addClusters'),
        name: 'addClusters',
        meta: { title: '新增集群', icon: 'index', noCache: true }

        //   }
        // ]
      },
      {
        // path: '/addProject',
        // component: Layout,
        // redirect: 'noredirect',
        // children: [
        //   {
        path: 'add',
        component: () => import('@/views/clusters/addProject'),
        name: 'addProject',
        meta: { title: '新增项目', icon: 'index', noCache: true }
        //   }
        // ]
      },
      {
        path: 'newHome',
        component: () => import('@/views/newHome'),
        name: 'newHome',
        meta: { title: '新首页', icon: 'index', affix: true, noCache: true }
      },
      {
        path: '/projectInfo',
        component: () => import('@/views/process/project/detail'),
        name: 'projectInfo',
        redirect: '/projectInfo/state',
        meta: { title: '项目信息', icon: 'index', noCache: true },
        children: [
          {
            path: 'state',
            component: () => import('@/views/newHome'),
            name: 'state',
            meta: { title: '项目状态', icon: 'index', noCache: true }
          },
          {
            path: 'userAuthorization',
            component: () => import('@/views/process/project/userAuthorization'),
            name: 'userAuthorization',
            meta: { title: '用户授权', icon: 'index', noCache: true }
          },
          {
            path: 'connectionSettings',
            component: () => import('@/views/process/project/connectionSettings'),
            name: 'connectionSettings',
            meta: { title: '连接器配置', icon: 'index', noCache: true }
          }
        ]
      }
    ]
  },

  {
    path: '/workspace',
    component: () => import('@/views/workspace'),
    meta: { title: '工作空间', noCache: true },
    hidden: true
  },
  {
    path: '/webide/:projectId',
    component: { extends: webide },
    name: '开发工作台',
    props: true,
    meta: { title: '开发工作台', noCache: false },
    hidden: true
  },
  {
    path: '/login',
    meta: { title: '登录', noCache: true },
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/features/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/features/401'),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/features/redirect')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        // component: () => import('@/views/home'),
        components: {
          default: () => import('@/views/home'),
          monitor: () => import('@/views/process/monitor/dataflowMonitor'),
          project: () => import('@/views/process/project/index')
        },
        name: 'Dashboard',
        meta: { title: '首页', icon: 'index', affix: true, noCache: true }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    children: [
      {
        path: 'center',
        component: () => import('@/views/system/user/center'),
        name: '个人中心',
        meta: { title: '个人中心' }
      }
    ]
  }
]

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
