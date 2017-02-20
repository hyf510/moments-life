/**
 *@ process 为node模块的全局变量
 *@ process.env：指向当前shell的环境变量
 */
module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || (process.env.NODE_ENV === 'production' ? 8080 : 3000),
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT || 3030,
  app: {
    title: '我的生活我做主！',
    description: '感恩，记住生命的每一个时刻！',
    head: {
      titleTemplate: '点滴生活: %s',
      meta: [
        {
          name: 'description',
          content: '我的生活我做主！'
        },
        { charset: 'utf-8' }
      ]
    }
  }
};
