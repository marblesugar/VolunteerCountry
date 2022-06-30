// pages/resetPwd/resetPwd.js
var app = getApp();
var userPhone = '';
var userPassword = '';
var userAPassword='';
var userRole = '0';
var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(19[0-9]{1}|(18[0-9]{1})))+\d{8})$/;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  inputPhone(e){
    console.log(e.detail.value);
    userPhone = e.detail.value;
  },

  inputPassword(e){
    console.log(e.detail.value);
    userPassword = e.detail.value;
  },
  inputAPassword(e){
    console.log(e.detail.value);
    userAPassword = e.detail.value;
  },
reset(e){
    //后端登录接口
    var that = this;
    if (userPhone == '' && userPassword == '') {
      wx.showModal({
        title: '提示',
        content: '你个憨包什么信息都没输入',
        showCancel: false
      })
    } else if (userPhone == '') {
      wx.showModal({
        title: '提示',
        content: '忘了输入手机号啦',
        showCancel: false
      })
    } else if (userPassword == '') {
      wx.showModal({
        title: '提示',
        content: '忘了输入密码啦',
        showCancel: false
      })
    } else if (isNaN(userPhone) || !myreg.test(userPhone) || userPhone.length != 11) {
      wx.showModal({
        title: '提示',
        content: '手机号输的格式有问题哎',
        showCancel: false
      })
    }else if(userAPassword!=userPassword){
      
        wx.showModal({
          title:'提示',
          content:'第二次输入密码与第一次不同',
          showCancel:false
        })
      
    } else {
      wx.login({
        success(res) {
          console.log(userPhone);
          console.log(userPassword);
          wx.request({
            url: 'https://chenmoc.com/vt/reset.php',
            method: 'POST',
            data: {
              pn: userPhone,
              pw: userPassword,
              temp_code: res.code
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
              console.log(res.data);
              if (res.data.status == 0) {
                wx.showModal({
                  title: '提示',
                  content: '此账号未注册',
                  showCancel: false
                })
              } else if (res.data.status == 1) {
                app.globalData.phone = res.data.mess.pn;
                app.globalData.password = res.data.mess.pw;
                app.globalData.role = res.data.role;
                wx.switchTab({
                  url: '/pages/activityList/activityList',
                })
              }
            }
          })
        }
      })
    }
  
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})