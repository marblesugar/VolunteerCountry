// pages/info/info.js
var app=getApp();
var time = require('../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatar: 'https://chenmoc.com/vtimg/a0.jpg',
        name: '',
        true_name:'',
        role: "",
        phone:"",
        email: '',
        sexIndex:'',
        sexPicker: ['男', '女'],
        birthday: '',
        region: ['山东省', '济南市', '市中区'],
        color: [0, 0, 0, 0, 0, 0,0], //0代表黑色，1代表'#E81010'
        today:'',
    },
    nameChange(e) {
        // console.log(e);
        var tempColor = this.data.color;
        var isZeroArray = !tempColor.some(item => item !== 0); // ture则表示是全0数组
        if (tempColor[0] == 1) {} else {
            if (!isZeroArray) {
                for (var i = 0; i < 7; i++) //清零
                    tempColor[i] = 0;
            }
            tempColor[0] = 1;
            this.setData({
                color: tempColor
            })
        }
    },
    nameInput(e){
      this.setData({
        name:e.detail.value
      })
      console.log(this.data.name);
    },
    truenameChange(e) {
        // console.log(e);
        var tempColor = this.data.color;
        var isZeroArray = !tempColor.some(item => item !== 0); // ture则表示是全0数组
        if (tempColor[6] == 1) {} else {
            if (!isZeroArray) {
                for (var i = 0; i < 7; i++) //清零
                    tempColor[i] = 0;
            }
            tempColor[6] = 1;
            this.setData({
                color: tempColor
            })
        }

    },
    truenameInput(e){
      this.setData({
        true_name:e.detail.value
      })
    },
    sexPicker(e) {
        this.setData({
            sexIndex: e.detail.value
        })
        console.log(this.data.sexIndex);
    },
    sexInput(e) {
        // console.log(e);
        var tempColor = this.data.color;
        var isZeroArray = !tempColor.some(item => item !== 0); // ture则表示是全0数组
        if (tempColor[1] == 1) {} else {
            if (!isZeroArray) {
                for (var i = 0; i < 7; i++) //清零
                    tempColor[i] = 0;
            }
            tempColor[1] = 1;
            this.setData({
                color: tempColor
            })
        }
    },
    DateChange(e) {
        this.setData({
            birthday: e.detail.value
        })
    },
    birthInput(e) {
        var tempColor = this.data.color;
        var isZeroArray = !tempColor.some(item => item !== 0); // ture则表示是全0数组
        if (tempColor[2] == 1) {} else {
            if (!isZeroArray) {
                for (var i = 0; i < 7; i++) //清零
                    tempColor[i] = 0;
            }
            tempColor[2] = 1;
            this.setData({
                color: tempColor
            })
        }
    },
    RegionChange: function (e) {
        this.setData({
            region: e.detail.value
        })
    },
    regionInput(e) {
        var tempColor = this.data.color;
        var isZeroArray = !tempColor.some(item => item !== 0); // ture则表示是全0数组
        if (tempColor[3] == 1) {} else {
            if (!isZeroArray) {
                for (var i = 0; i < 7; i++) //清零
                    tempColor[i] = 0;
            }
            tempColor[3] = 1;
            this.setData({
                color: tempColor
            })
        }
    },
    emailChange(e) {
        var tempColor = this.data.color;
        var isZeroArray = !tempColor.some(item => item !== 0); // ture则表示是全0数组
        if (tempColor[5] == 1) {} else {
            if (!isZeroArray) {
                for (var i = 0; i < 7; i++) //清零
                    tempColor[i] = 0;
            }
            tempColor[5] = 1;
            this.setData({
                color: tempColor
            })
        }
    },
emailInput(e){
  this.setData({
    email:e.detail.value
    })
},
    signOut(e) {
      wx.showModal({
        title:'提示',
        content:'确定注销该账号',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定');
            var that = this;
            //与服务器交互
            wx.request({
              url: 'https://chenmoc.com/vt/signout.php',
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
                if (res.data.error_code == -1) {
                  wx.showModal({
                    title: '提示',
                    content: res.data.msg,
                    showCancel: false,
                    success(res) {}
                  })
                } else { //error_code==0注销成功
                  console.log(res.data);
                  wx.navigateTo({
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
    save(e){
        var that = this;
        if (this.data.name == "") {
          wx.showModal({
            title: '提示',
            content: '未填写昵称',
            showCancel: false
          })
        } else if (this.data.true_name == "") {
          wx.showModal({
            title: '提示',
            content: '未填写姓名',
            showCancel: false
          })
        } else if (this.data.email == "") {
          wx.showModal({
            title: '提示',
            content: '未填写邮箱',
            showCancel: false
          })
        }  else {
          console.log(that.data.birthday);
          wx.request({
            url: 'https://chenmoc.com/vt/profile.php',
            method: 'POST',
            data: {
              role:app.globalData.role,
              phone: app.globalData.phone,
              name: that.data.name,
              true_name: that.data.true_name,
              email: that.data.email,
              gender:that.data.sexIndex,
              birth:that.data.birthday,
              region:that.data.region[0]+that.data.region[1]+that.data.region[2]
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
              console.log(res.data);
              //返回一个project_id
              if(res.data.status==-1){
                wx.showModal({
                  title:'提示',
                  content:'保存失败，请重新点击保存按钮',
                  showCancel:false
                })
              }else{
                wx.showModal({
                  title:'提示',
                  content:'保存成功',
                  showCancel:false
                })
              }
            }
          })
        }
      
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

      this.setData({
        phone:app.globalData.phone,
        role:app.globalData.role,
        today: time.formatTimeSec(new Date(), 'Y-M-D')
      })

        var that = this;
          wx.request({
            url: 'https://chenmoc.com/vt/profileload.php',
            method: 'POST',
            data: {
              role:app.globalData.role,
              phone: app.globalData.phone,
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
              console.log(res.data);
              //返回一个project_id
              if(res.data.status==-1){
                wx.showModal({
                  title:'提示',
                  content:'网络连接有问题哦~请刷新重新进入',
                  showCancel:false
                })
              }else{
                that.setData({ 
                  name: res.data.mess.nickname,
                  true_name:res.data.mess.name,
                  email: res.data.mess.mail,
                  sexIndex:res.data.mess.gender,
                  birthday:res.data.mess.birth==''?that.data.today:res.data.mess.birth,
                  region:res.data.mess.address
                 })
             
              }
            
            }
          })
      


    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady:function () {

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