import permission from './permission'
const install = function(Vue) {
  console.log(Vue)
  Vue.directive('permission', permission)
}

if (window.Vue) {
  window['permission'] = permission
  Vue.use(install); // eslint-disable-line
}
console.log(permission)
permission.install = install
console.log(permission)
export default permission
