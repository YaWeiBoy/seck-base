import { asyncRoutes, constantRoutes } from '@/router'
import { deepClone, generateTree } from '@/common/utils'
/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(route, modules) {
  if (route.path) {
    modules.some(module => {
      console.log(route.path)
      console.log(module.path)
      route.path === module.path
    })
    return modules.some(module => route.path === module.path)
  } else {
    return false
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
// routes, roles
export function filterAsyncRoutes(routes, modules) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(tmp, modules)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, modules)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, data) {
    return new Promise(resolve => {
      let accessedRoutes
      if (data.roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = generateTree(asyncRoutes, '/', deepClone(data.modules))
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
