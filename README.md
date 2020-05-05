# seck-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```



##  功能
```
 -src/api           所有请求（可按模块划分请求接口）

    - /table        获取table

    - /user         获取用户信息   


-src/assets/         图片资源（最好按功能块建立文件夹）

    - /404_images   错误页面图标

    - /...          其他


-src/common     通用文件夹（css、js、icon）

    - /icons    自定义图标svg

    - /styles   样式文件夹
 
    - /utils    自定义方法


-src/components          组件文件夹

    - /Breadcrumb       面包屑

    - /ErrorLog          错误日志

    - /Hamburger         左侧收缩按钮

    - /HeaderSearch      头部搜索（暂未使用）
    
    - /Screenfull        全屏组件
    
    - /SizeSelect        elementUI尺寸

    - /SvgIcon           图标组件


-src/directive           自定义指令

    - /el-drag-dialog    可拖拽弹窗

    - /permission        权限判定显隐


-src/layout                 首页布局

    - /components/AppMain   系统展示区域

    - /components/Navbar    系统头部

    - /components/Sidebar   左侧菜单栏

    - /components/TagsView  头部菜单栏


-src/router          路由（可按模块划分）


-src/store           vuex状态管理（modules）


-src/views                  页面（暂定  后续补充）

    - /form                 示例表单

    - /home                 系统首页

    - /icons                图标

    - /login                登录

    - /nested               路由嵌套

    - /permission           权限测试

    - /redirect             重新刷新

    - /table                表格示例

    - /tree                 树状图示例

    - /404                  错误页面
```