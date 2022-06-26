// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
    name: '凯尔',
  },
  exit(e) { //退出
    //全局变量userid设为空
    //跳转登录页面
    //后端交互？
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },
  toInfo(e) {
    wx.navigateTo({
      url: '/pages/info/info',
    })
  },
  toMytalk(e) {
    wx.navigateTo({
      url: '/pages/mytalk/mytalk',
    })
  },
  toAbout(e) {
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },
  toMymessage(e) {
    wx.navigateTo({
      url: '/pages/mymessage/mymessage',
    })
  },
  toServelog(e) {
    wx.navigateTo({
      url: '/pages/serveLog/serveLog',
    })
  },
  toPrivatetalk(e) {
    wx.navigateTo({
      url: '/pages/privateTalk/privateTalk',
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
        selected: 2
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