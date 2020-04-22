module.exports = {
  configureWebpack:{
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'content': '@/content',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'store' :'@/store'
      }
    }
  }
}