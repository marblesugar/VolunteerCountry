// pages/activitylist/activitylist.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // list: [{
    //     id: 1,
    //     name: "南海中学8（10）班志愿者活动",
    //     publisher: "应用外国语学校",
    //     place: "南海街道205号南海中学",
    //     time: "2022-06-21"
    //   },
    //   {
    //     id: 2,
    //     name: "南海中学8（10）班志愿者活动",
    //     publisher: "应用外国语学校",
    //     place: "南海街道205号南海中学",
    //     time: "2022-06-21"
    //   },
    //   {
    //     id: 3,
    //     name: "南海中学8（10）班志愿者活动",
    //     publisher: "应用外国语学校",
    //     place: "南海街道205号南海中学",
    //     time: "2022-06-21"
    //   },
    //   {
    //     id: 4,
    //     name: "南海中学8（10）班志愿者活动",
    //     publisher: "应用外国语学校",
    //     place: "南海街道205号南海中学",
    //     time: "2022-06-21"
    //   },
    //   {
    //     id: 5,
    //     name: "南海中学8（10）班志愿者活动",
    //     publisher: "应用外国语学校",
    //     place: "南海街道205号南海中学",
    //     time: "2022-06-21"
    //   },
    //   {
    //     id: 6,
    //     name: "南海中学8（10）班志愿者活动",
    //     publisher: "应用外国语学校",
    //     place: "南海街道205号南海中学",
    //     time: "2022-06-21"
    //   },
    //   {
    //     id: 7,
    //     name: "南海中学8（10）班志愿者活动",
    //     publisher: "应用外国语学校",
    //     place: "南海街道205号南海中学",
    //     time: "2022-06-21"
    //   },
    // ],
    list:[],
    list1: ['最新项目', "疫情防控活动", "中小学公益活动", "招募培训", "通识与专项培训", "历史项目"],
    input:""
  },
  Input(e) {
    this.setData({
      input:e.detail.value
    })
  },
  btn_search(e){
    var that = this;
    //与服务器交互
    wx.request({
      url: 'https://chenmoc.com/vt/search.php',
      method: "POST",
      data: {
        input: that.data.input
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res.data);
        if (res.data.error_code == -1) {
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel: false,
            success(res) {}
          })
        } else { //error_code==0获取数据成功
          that.setData({
            list: res.data.info
          })
          console.log(res.data.info);
        }
      },
      fail: function (res) {
        wx.showModal({
          title: "哎呀",
          content: "网络不在状态呢~",
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      },
      complete: function (res) {
        wx.hideLoading()
      }
    })
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
  toSomeone(e) {
    console.log(e);
    wx.navigateTo({
      url: '../activityInfo/activityInfo?id='+e.currentTarget.dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.showLoading({
      title: '加载中',
    })
    //与服务器交互
    wx.request({
      url: 'https://chenmoc.com/vt/missionall.php',
      method: "POST",
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res.data);
        if (res.data.error_code == -1) {
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel: false,
            success(res) {}
          })
        } else { //error_code==0获取数据成功
          that.setData({
            list: res.data.info
          })
          console.log(res.data.info);
        }
      },
      fail: function (res) {
        wx.showModal({
          title: "哎呀",
          content: "网络不在状态呢~",
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      },
      complete: function (res) {
        wx.hideLoading()
      }
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 2000);
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