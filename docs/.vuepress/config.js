module.exports = {
  theme: 'vdoing', // 主题
  // base: '/vuepress-blog/',
  // theme: reco, // 主题
  title: '咸鱼呀',
  description: '个人博客',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端笔记',
        link: '/note/',
        items: [
          {
            text: '博客文章',
            items: [
              { text: "node搭建简易cli", link: '/note/node-cli/' },
              { text: "一个好看的loading", link: '/note/css-loading/' },
              { text: "CSS-笔记", link: '/note/css-note/' },
              { text: "git提交规范", link: '/note/git-standard/' },
              { text: "JS工具函数-转载", link: '/note/js-util/' },
              { text: "Vue组件打包到发布流程", link: '/note/npm-build/' },
              { text: "nuxt.js-相关配置信息", link: '/note/nuxt-note/' },
              { text: "nvm-upgrade", link: '/note/nvm-upgrade/' },
              { text: "NVM 安装 之 window", link: '/note/nvm-window/' },
              { text: "正则常用表达式", link: '/note/regular/' },
              { text: "vue 3.0 生命周期函数记录", link: '/note/vue3-record/' },
              { text: "vue 对IE的支持", link: '/note/vue-Ie/' },
              { text: "vue入门技术分享", link: '/note/vue-share/' },
              { text: "解决ios端inout失焦时，底部白底", link: '/note/web-Ios-Android/' },
              { text: "WebStorm配置本地测试服务器", link: '/note/WebStorm-server/' }
            ]
          }
        ]
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
      { text: '关于', link: '/about/' },
      { text: '博客', link: 'https://blog.xianyuya.ltd/' }
    ],
    repo: 's-xianyu/vuepress-blog', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数1
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',
    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    author: {
      name: 's-xianyu', // 必需
      link: 'https://github.com/s-xianyu', // 可选的
    },
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/avatar.png', // 导航栏logo
    // 博主信息，显示在首页侧边栏
    blogger: {
      avatar: 'https://s2.loli.net/2022/03/10/n1sRNB23eVbTg57.jpg',
      name: 's-xianyu',
      slogan: '前端小白',
    },
    // 页脚信息
    footer: {
      createYear: 2022, // 博客创建年份
      copyrightInfo:
        's-xianyu | <span>小站</span>', // 博客版权信息，支持a标签
    },
  },
  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ],
}
