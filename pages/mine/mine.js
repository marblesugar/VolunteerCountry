// pages/mine/mine.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: 'https://chenmoc.com/vtimg/a0.jpg',
    name: '李博豪',
    grade:'70%',
    num:70,
    role:'',
  },
  logOut(e){
    wx.showModal({
      title:'提示',
      content:'确定退出？',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          var that = this;
          //与服务器交互
          wx.request({
            url: 'https://chenmoc.com/vt/logout.php',
            method: "POST",
            data: {
              phone:app.globalData.phone,
              role:app.globalData.role
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
              console.log(res.data);
              if (res.data.status == -1) {
                wx.showModal({
                  title: '提示',
                  content: res.data.msg,
                  showCancel: false,
                  success(res) {}
                })
              } else { //status==1退出成功
                console.log(res.data);
                wx.reLaunch({
                  url: '/pages/index/index',
                })
              }
            },
           
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  toInfo(e) {
    wx.navigateTo({
      url: '/pages/info/info',
    })
  },
  toMytalk(e) {
    wx.navigateTo({
      url: '/pages/myTalk/myTalk',
    })
  },
  toAbout(e) {
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },
  toMymessage(e) {
    wx.navigateTo({
      url: '/pages/myMessage/myMessage',
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
    this.setData({
      role:app.globalData.role
    })
    let that = this;
    setTimeout(function() {
      that.setData({
        loading: true
      })
    }, 500)
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