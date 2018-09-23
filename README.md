项目名：[ A React project ]，H5重构项目。

## 1. 如何运行

> node版本 `[8.11.3]`

### 1.1 开发环境配置

```sh
# 安装 cnpm 命令行工具。
npm i -g cnpm --registry=https://registry.npm.taobao.org

# 安装依赖包
cnpm i
```

### 1.2 开发过程

#### 1.2.1 命令

```sh
# pages模版快速生成
npm run tep `文件名`

# 开发时时编译
npm run dev

# 编译打包
npm run build
```

#### 1.2.2 开发注意事项

1.eslint+stylelint已经开启，请注意代码规范
如果不希望lint限制你的代码规范，删除.eslintrc和.stylelintrc即可

2.pxtorem已经配置，以750*1334设计稿为比例自动转换px单位


## 2. 业务介绍

### 2.1 React业务入口

入口地址为 `src/main.js`

src目录结构

    ├── components              // 组件
    ├── config              	  // 配置文件
    │   └── index.js			  		    // 配置参数
    ├── images                  // 图片文件夹
    ├── models                  // 公共models
    ├── pages                   // 页面
    ├── routes                  // 路由
    ├── services                // 公共api接口
    ├── styles                  // 样式
    │   ├── base.less					      // 全局基础样式
    │   ├── iconfont.less           // 图标文件
    │   ├── mixin.less              // less方法 
    │   └── theme.less					    // less常量定义
    ├── utils                   // 工具类
    │    └── request.js             // 请求封装
    ├── entry.ejs               // 入口ejs模版
    ├── index.js                // 入口文件
    └── route.js					      / /路由


## 3. 其他

### dva开发文档地址

> https://github.com/dvajs.

