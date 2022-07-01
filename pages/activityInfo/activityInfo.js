// pages/activityinfo/activityinfo.js
var app = getApp();
var time = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft: 0,
    ColorList: [{
        'name': 'grey',
        'shadow': 1,
      },
      {
        'name': 'red',
        'shadow': 1,
      }
    ],
    list: ["阅读协议", "项目信息", "项目简介"],
    content1: "本人作为一名深圳志愿者，清楚了解当前新型冠状病毒感染肺炎疫情对公共健康和个人生命的危害。我自愿加入疫情防控志愿者，积极参加疫情防控工作。本人承诺：近一个月没有发热、咳嗽、胸闷等呼吸道感染病史。坚决服从命令、听从指挥，自觉践行“奉献、友爱、互助、进步”的志愿服务精神，尽己所能，不计报酬，帮助他人，服务社会，带头执行科学防疫和自我防护措施，确保完成任务。",
    list1: [],
    project_id: "",
    number: "", //项目已报名人数
    type_switch: '',
    op: '',
    role: '',
    today: '',
    imgLen: 0,
    imgList: []
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  toOnetalk(e) {
    wx.navigateTo({
      url: '/pages/oneTalk/oneTalk',
    })
  },
  type_switch(e) {
    var sw = e.detail.value;
    console.log(sw);
    this.setData({
      type_switch: e.detail.value
    })
  },
  signUpVol(e) {
    wx.navigateTo({
      url: '/pages/signUpVol/signUpVol',
    })
  },
  signUp(e) {
    var that = this;
    //与服务器交互
    wx.request({
      url: 'https://chenmoc.com/vt/signup.php',
      method: "POST",
      data: {
        id: this.data.project_id,
        phone: app.globalData.phone,
        nmax: this.data.list1.nmax,
        amin: this.data.list1.amin,
        amax: this.data.list1.amax,
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
          })
        } else if (res.data.status == -4) { //用户信息未完善
          wx.showModal({
            title: '提示',
            content: '请完善个人信息',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定');
                wx.navigateTo({
                  url: '/pages/info/info',
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        } else if (res.data.status == -5) { //年龄限制
          wx.showModal({
            title: '提示',
            content: '不符合项目年龄范围',
            showCancel: false,
          })
        } else if (res.data.status == -2) { //人数已满
          wx.showModal({
            title: '提示',
            content: '人数已满',
            showCancel: false,
          })
        } else if (res.data.status == -3) { //报名成功请勿重复报名
          wx.showModal({
            title: '提示',
            content: '已报名成功，请勿重复报名',
            showCancel: false,
          })
        } else { //报名成功
          that.setData({
            number: res.data.sn

          })
          console.log(that.data.number);
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
  delete(e) {
    var that = this;
    //与服务器交互
    wx.request({
      url: 'https://chenmoc.com/vt/revoke.php',
      method: "POST",
      data: {
        id: this.data.project_id,
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
          })
        } else if (res.data.status == -2) {
          wx.showModal({
            title: '提示',
            content: '无权限删除该项目',
            showCancel: false,
          })
        } else { //删除成功
          wx.showModal({
            title: '提示',
            content: '删除成功',
            showCancel: false,
          })
          wx.hideLoading();
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
          setTimeout(function () {
            wx.redirectTo({
              url: '../publisher/publisher',
            })
          }, 2000)
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
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      project_id: options.id,
      op: options.op,
      role: app.globalData.role,
      today: time.formatTimeSec(new Date(), 'Y-M-D'),
    });
    console.log(options.id);
    var that = this
    wx.showLoading({
      title: '加载中',
    })
    //与服务器交互
    wx.request({
      url: 'https://chenmoc.com/vt/searchid.php',
      method: "POST",
      data: {
        id: options.id
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
        } else { //获取数据成功
          // var t = new Array().fill(0);
          var arr = [];
          for (var n = 0; n < res.data.info[0].img; n++) {
            arr[n] = 0;
          }
          that.setData({
            list1: res.data.info[0],
            number: res.data.sn,
            imgLen: res.data.info[0].img,
            imgList: arr
          })
          console.log(that.data.imgList)
          // for(let i=1;i<=that.data.imgLen;i++)
          // {
          //   imgList.push(i);
          // }
          console.log(that.data.list1);
          console.log("获取的数据");
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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