// pages/register/regitster.js
var app = getApp();
var userPhone = '';
var userPassword = '';
var userRole = '0';
var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(19[0-9]{1}|(18[0-9]{1})))+\d{8})$/;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  inputPhone(e) {
    console.log(e.detail.value);
    userPhone = e.detail.value;
  },

  inputPassword(e) {
    console.log(e.detail.value);
    userPassword = e.detail.value;
  },

  roleChoose(e) {
    console.log(e.detail.value);
    userRole = e.detail.value;
  },

  sure(e) {
    var that = this;
    if(userPhone == '' && userPassword == ''){
      wx.showModal({
        title: '提示',
        content: '你个憨包什么信息都没输入',
        showCancel: false
      })
    }
    else if (userPhone == ''){
      wx.showModal({
        title: '提示',
        content: '忘了输入手机号啦',
        showCancel: false
      })
    }
    else if (userPassword == ''){
      wx.showModal({
        title: '提示',
        content: '忘了输入密码啦',
        showCancel: false
      })
    }
    else if (isNaN(userPhone)||!myreg.test(userPhone)||userPhone.length!=11){
      wx.showModal({
        title: '提示',
        content: '手机号你输的格式有问题哎',
        showCancel: false
      })
    }
    else{
      wx.login({
        success(res){
          wx.request({
            url: 'https://chenmoc.com/vt/register.php',
            method: 'POST',
            data: {
              pn: userPhone,
              pw: userPassword,
              role: userRole,
              temp_code: res.code
            },
            header:{
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function(res){
              console.log(res.data);
              app.globalData.phone = userPhone;
              app.globalData.password = userPassword;
              app.globalData.role = userRole;
              wx.switchTab({
                url: '/pages/activityList/activityList',
              })
            }
          })
        }
      })
    }
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