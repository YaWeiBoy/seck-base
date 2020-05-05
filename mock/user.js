
const tokens = {
  admin: {
    isAdmin: true,
    loginName: 'zyw',
    loginType: 0,
    roleId: '1',
    roleName: null,
    token: 'admin-token',
    userId: '1248066338546388996',
    userName: '张亚伟'
  },
  editor: {
    token: 'editor-token'
  }
}
const users = {
  'admin-token': {
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    modules: [{
      icon: 'svg-name',
      id: '1',
      isAlive: true,
      moduleName: 'permission',
      moduleText: 'table',
      parentModuleId: '',
      path: '/permission',
      sequence: 0
    }, {
      icon: 'svg-name',
      id: '1194855828424232960',
      isAlive: true,
      moduleName: 'permission',
      moduleText: 'table',
      parentModuleId: '1',
      path: '/permission/permission',
      sequence: 0
    }, {
      icon: 'svg-name',
      id: '1194855828424232960',
      isAlive: true,
      moduleName: 'permission',
      moduleText: 'table',
      parentModuleId: '1',
      path: '/permission/index',
      sequence: 0
    }, {
      icon: 'svg-name',
      id: '1194855828424232960',
      isAlive: true,
      moduleName: 'permission',
      moduleText: 'table',
      parentModuleId: '1',
      path: '/icon',
      sequence: 0
    }, {
      icon: 'svg-name',
      id: '1194855828424232960',
      isAlive: true,
      moduleName: 'permission',
      moduleText: 'table',
      parentModuleId: '1',
      path: '/icon/index',
      sequence: 0
    }],
    user: {
      authUpdateTime: null,
      companyId: '1',
      createTime: '2020-04-09 09:52:57',
      createUser: null,
      id: '1248066338546388996',
      isAlive: true,
      lastLoginTime: null,
      loginName: 'zyw',
      loginPassWord: 'a906449d5769fa7361d7ecc6aa3f6d28',
      loginType: 0,
      notifyMobile: '19088888876',
      regionRoleId: '4',
      roleId: null,
      updateTime: '2020-04-09 09:52:57',
      updateUser: null,
      userName: '张亚伟'
    }
  },
  'editor-token': {
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    modules: [{
      icon: 'svg-name',
      id: '1194855828424232960',
      isAlive: true,
      moduleName: 'permission',
      moduleText: 'table',
      parentModuleId: '1',
      path: '/icon',
      sequence: 0
    }, {
      icon: 'svg-name',
      id: '1194855828424232960',
      isAlive: true,
      moduleName: 'permission',
      moduleText: 'table',
      parentModuleId: '1',
      path: '/icon/index',
      sequence: 0
    }],
    user: {
      authUpdateTime: null,
      companyId: '1',
      createTime: '2020-04-09 09:52:57',
      createUser: null,
      id: '1248066338546388996',
      isAlive: true,
      lastLoginTime: null,
      loginName: 'zyw',
      loginPassWord: 'a906449d5769fa7361d7ecc6aa3f6d28',
      loginType: 0,
      notifyMobile: '19088888876',
      regionRoleId: '4',
      roleId: null,
      updateTime: '2020-04-09 09:52:57',
      updateUser: null,
      userName: '张亚伟'
    }
  }
}
export default [
  // user login
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          state: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        state: 0,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          state: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        state: 0,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        state: 0,
        data: 'success'
      }
    }
  }
]
