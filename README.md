# NPM 指令
# npm install          安装依赖
# npm start            启动服务器
# npm run prod
# npm test

# npm watch-client     启动开发服务器(热替换)

# npm start-dev        启动前端服务器
# npm start-prod       启动前端服务器

# npm start-api-dev    启动API服务器
# npm start-api-prod   启动API服务器

# 开发服务器
# 作用：用于在开发环境下提供热替换服务
# 注意：生产环境下无需启动开发服务器
# webpack/dev.config.js 开发环境下的webpack配置
# src/config.js 配置开发环境的port和host

# 前端服务器
# 作用：用于数据请求，渲染页面和代理API服务器
# src/server.js

# API服务器
# 作用：用于提供测试使用
# src/api/api.js

# 启动文件
# (1)开发环境将使用Babel的Require Hook启动服务
# (2)生产环境则先编译后启动

# 其他工具
# (1)Webpack同构工具
# (2)ESLint去毛机
# (3)bootstrap-loader

