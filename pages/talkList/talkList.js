// pages/talklist/talklist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        'avatar': 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
        'name': '凯尔',
        'time': '2021-07-23 22:10',
        'content': '1 Nowadays with the rapid development of advanced ……., more and more…..  are commonly and widely used in everyday life.(讲重要性) 2 The popularity of digital …will have great influence on our work, study and everyday life. On the one hand …,  But on the other hand.（讲影响）',
        'isCollect': 1
      },
      {
        'avatar': 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
        'name': 'Kitty',
        'time': '2021-07-23 22:10',
        'content': '2013年中旬，美国一家互联网公司进入中国，在产品落地和市场竞争分析时找到TOMsInsight团队做顾问。这家公司的优势是技术和产品设计，但国内有两家无节操的山寨模仿者。美MIT毕业的年2013年中旬，美国一家互联网公司进入中国，在产品落地和市场竞争分析时找到TOMsInsight团队做顾问。这家公司的优势是技术和产品设计，但国内有两家无节操的山寨模仿者。美MIT毕业的年轻帅哥CEO对之极其不屑，而我们团队的首席分析师非常明确直接的告诉他:“你会输给国内的山寨公司，因为对方在APP营销的时候已经开始使用信封号。而你不会用也不能用。”当这位CEO得知什么是信封号营销时候，非常诧异的睁大的眼睛，做出一个C罗进球庆祝似夸张的表情。几个月后，美国公司退出了中国市场。而那个夸张的表情一直留在我脑海中挥之不去就像魔咒一样。"',
        'isCollect': 1
      },
      {
        'avator': 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
        'name': 'growth',
        'time': '2021-07-23 22:10',
        'content': '2013年中旬，美国一家互联网公司进入中国，在产品落地和市场竞争分析时找到TOMsInsight团队做顾问。这家公司的优势是技术和产品设计，但国内有两家无节操的山寨模仿者。美MIT毕业的年2013年中旬，美国一家互联网公司进入中国，在产品落地和市场竞争分析时找到TOMsInsight团队做顾问。这家公司的优势是技术和产品设计，但国内有两家无节操的山寨模仿者。美MIT毕业的年轻帅哥CEO对之极其不屑，而我们团队的首席分析师非常明确直接的告诉他:“你会输给国内的山寨公司，因为对方在APP营销的时候已经开始使用信封号。而你不会用也不能用。”当这位CEO得知什么是信封号营销时候，非常诧异的睁大的眼睛，做出一个C罗进球庆祝似夸张的表情。几个月后，美国公司退出了中国市场。而那个夸张的表情一直留在我脑海中挥之不去就像魔咒一样。"',
        'isCollect': 0
      },
      {
        'avatar': 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg',
        'name': 'Kerry',
        'time': '2022-06-23 22:20',
        'content': '1、能跑的通一个spring boot项目；2、项目里的各种语言，不要一下就能看懂，但是对于不熟悉的语法和Api能够通过查询资料之后理解含义。3、spring boot项目运行启动之后，能够通过url请求拿到结果，发出url请求后，这个请求经过了哪些模块，是怎么访问的数据库，然后返回，处理中出现了异常怎么办。这些流程要明白。我说的是找到初级开发的工作。如果非要说还要去学习各种组件，比如redis或者是spring cloud alibaba组件等等。也没有说错，这些内容是提高竞争力的。',
        'isCollect': 0
      }
    ]
  },
  toSomeone(e) {
    console.log(e);
    wx.navigateTo({
      url: '../talkInfo/talkInfo?id=' + e.currentTarget.dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  tabBar() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.tabBar();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})