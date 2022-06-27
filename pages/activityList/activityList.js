// pages/activitylist/activitylist.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    list: [
      {
        id: 1,
        name: "南海中学8（10）班志愿者活动",
        publisher: "应用外国语学校",
        place: "南海街道205号南海中学",
        time: "2022-06-21"
      },
      {
        id: 2,
        name: "南海中学8（10）班志愿者活动",
        publisher: "应用外国语学校",
        place: "南海街道205号南海中学",
        time: "2022-06-21"
      },      
      {
        id: 3,
        name: "南海中学8（10）班志愿者活动",
        publisher: "应用外国语学校",
        place: "南海街道205号南海中学",
        time: "2022-06-21"
      },      
      {
        id: 4,
        name: "南海中学8（10）班志愿者活动",
        publisher: "应用外国语学校",
        place: "南海街道205号南海中学",
        time: "2022-06-21"
      },
      {
        id: 5,
        name: "南海中学8（10）班志愿者活动",
        publisher: "应用外国语学校",
        place: "南海街道205号南海中学",
        time: "2022-06-21"
      },
      {
        id: 6,
        name: "南海中学8（10）班志愿者活动",
        publisher: "应用外国语学校",
        place: "南海街道205号南海中学",
        time: "2022-06-21"
      },
      {
        id: 7,
        name: "南海中学8（10）班志愿者活动",
        publisher: "应用外国语学校",
        place: "南海街道205号南海中学",
        time: "2022-06-21"
      },
    ],
    list1:['最新项目',"疫情防控活动","中小学公益活动","招募培训","通识与专项培训","历史项目"]
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  toSomeone(e){
    wx.navigateTo({
      url: '../activityinfo/activityinfo',
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
        selected: 0
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