import { login, loginByToken, getInfo, logout } from '@/api/login'
import { getToken, getRefreshToken, setToken, setRefreshToken, removeToken, removeRefreshToken, removeCookie } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    refreshToken: getRefreshToken(),
    user: {
      workspaceId: ''
    },
    roles: [],
    // 第一次加载菜单时用到
    loadMenus: false
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_REFRESHTOKEN: (state, token) => {
      state.refreshToken = token
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_LOAD_MENUS: (state, loadMenus) => {
      state.loadMenus = loadMenus
    },
    SET_WORKSPACEID: (state, workspaceId) => {
      state.user.workspaceId = workspaceId
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const rememberMe = userInfo.rememberMe
      return new Promise((resolve, reject) => {
        login(userInfo.username, userInfo.password, userInfo.code, userInfo.uuid).then(res => {
          setToken(res.token, rememberMe)
          setRefreshToken(res.refreshToken, rememberMe)
          commit('SET_TOKEN', res.token)
          commit('SET_REFRESHTOKEN', res.refreshToken)
          setUserInfo(res.user, commit)
          // 第一次加载菜单时用到， 具体见 src 目录下的 permission.js
          commit('SET_LOAD_MENUS', true)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // token登录
    LoginByToken({ commit }, token) {
      return new Promise((resolve, reject) => {
        loginByToken(token).then(res => {
          setToken(res.token, false)
          commit('SET_TOKEN', res.token)
          setUserInfo(res.user, commit)
          // 第一次加载菜单时用到， 具体见 src 目录下的 permission.js
          commit('SET_LOAD_MENUS', true)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          setUserInfo(res, commit)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(res => {
          logOut(commit)
          resolve()
        }).catch(error => {
          logOut(commit)
          reject(error)
        })
      })
    },

    updateLoadMenus({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_LOAD_MENUS', false)
      })
    },
    setWorkspaceId({ commit }, workspaceId) {
      return new Promise((resolve, reject) => {
        commit('SET_WORKSPACEID', workspaceId)
      })
    }
  }
}

export const logOut = (commit) => {
  commit('SET_TOKEN', '')
  commit('SET_REFRESHTOKEN', '')
  commit('SET_ROLES', [])
  removeCookie('isTokenLogin')
  removeToken()
  removeRefreshToken()
}

export const setUserInfo = (res, commit) => {
  // 如果没有任何权限，则赋予一个默认的权限，避免请求死循环
  if (res.roles.length === 0) {
    commit('SET_ROLES', ['ROLE_SYSTEM_DEFAULT'])
  } else {
    commit('SET_ROLES', res.roles)
  }
  commit('SET_USER', res)
}

export default user
