// index.js
var app = getApp();
var userPhone = '';
var userPassword = '';
var userRole = '0';
var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(19[0-9]{1}|(18[0-9]{1})))+\d{8})$/;
// 获得openid->后台对比->对比有，则跳转at
//                     ->对比无，则login(e)
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  inputPhone(e) {
    // console.log(e.detail.value);
    userPhone = e.detail.value;
  },
  inputPassword(e) {
    userPassword = e.detail.value;
  },
  register(e) {
    wx.navigateTo({
      url: '/pages/register/regitster',
    })
  },
  resetPwd(e) {
    wx.navigateTo({
      url: '/pages/resetPwd/resetPwd',
    })
  },
  login(e) {
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
    } else {
      wx.login({
        success(res) {
          console.log(userPhone);
          console.log(userPassword);
          wx.request({
            url: 'https://chenmoc.com/vt/login.php',
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
              } else if (res.data.status == 2) {
                wx.showModal({
                  title: '提示',
                  content: '密码输入不正确',
                  showCancel: false
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
  onLoad: function (options) {
    var that = this;
    wx.login({
      success(res) {
        console.log(res.code);
        wx.request({
          url: 'https://chenmoc.com/vt/autologin.php',
          method: 'POST',
          data: {
            temp_code: res.code
          },
          header: {
            'content-type': "application/x-www-form-urlencoded"
          },
          success: function (res) {
            console.log(res.data);
            app.globalData.openid = res.data.auth.openid;
            app.globalData.role = res.data.role;
            if (res.data.status == 1) {
              app.globalData.phone = res.data.mess[0].pn;
              app.globalData.password = res.data.mess[0].pw;
              console.log(app.globalData);
              wx.switchTab({
                url: '../activityList/activityList',
              })
            }
          }
        })
      }
    })
  },
})