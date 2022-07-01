// pages/publisher/publisher.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    role: "",
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
    list: ["任务管理", "发布任务"],
    content1: "本人作为一名深圳志愿者，清楚了解当前新型冠状病毒感染肺炎疫情对公共健康和个人生命的危害。我自愿加入疫情防控志愿者，积极参加疫情防控工作。本人承诺：近一个月没有发热、咳嗽、胸闷等呼吸道感染病史。坚决服从命令、听从指挥，自觉践行“奉献、友爱、互助、进步”的志愿服务精神，尽己所能，不计报酬，帮助他人，服务社会，带头执行科学防疫和自我防护措施，确保完成任务。",
    name: "", //项目名称
    organization: "", //发布组织
    personname: "", //联系人姓名
    phone: "", //联系人手机号
    lowage: "",
    highage: "",
    limit: "",
    beginDate: '2022-06-27',
    endDate: '2022-06-27',
    beginTime: '8:00',
    endTime: '8:00',
    content1: "", //活动地点
    content2: "", //项目简述
    imgList: [], //照片地址
    index: "",
    input:"",
    // index1:"",
    // list2: [{
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
    list2: [],
    list1: ["未审批项目", "待开始项目", "进行中", "历史项目","驳回项目"]
  },
  inputName(e) {
    // console.log(e);
    this.setData({
      name: e.detail.value
    })
  },
  inputOg(e) {
    this.setData({
      organization: e.detail.value
    })
  },
  inputCn(e) {
    this.setData({
      personname: e.detail.value
    })
  },
  inputCp(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  inputLowage(e) {
    this.setData({
      lowage: e.detail.value
    })
  },
  inputHighage(e) {
    this.setData({
      highage: e.detail.value
    })
  },
  inputLimit(e) {
    this.setData({
      limit: e.detail.value
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
    wx.navigateTo({
      url: '../activityInfo/activityInfo?id=' + e.currentTarget.dataset.id + "&op=1",
    })
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  PickerChange(e) {
    //  console.log(e);
    this.setData({
      index: e.detail.value,
    })
  },
  TimeChange1(e) {
    this.setData({
      beginTime: e.detail.value
    })
  },
  TimeChange2(e) {
    this.setData({
      endTime: e.detail.value
    })
  },
  DateChange1(e) {
    this.setData({
      beginDate: e.detail.value
    })
  },
  DateChange2(e) {
    this.setData({
      endDate: e.detail.value
    })
  },
  ChooseImage() {
    wx.chooseMedia({
      count: 9,
      meidiaType: ['image'],
      sourceType: ['album', 'camera'],
      camera: 'back',
      success: (res) => {
        console.log(res.tempFiles.tempFilePath);
        console.log(res.tempFiles);
        var temp = [];
        temp.push.apply(temp, this.data.imgList);
        for (let i = 0; i < res.tempFiles.length; i++) {
          temp.push(res.tempFiles[i].tempFilePath)
        }
        this.setData({
          imgList: temp
        })
        console.log(this.data.imgList);
      }
    })
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '确认',
      content: '确定要删除吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  textareaAInput(e) {
    console.log(e.detail.value);
    this.setData({
      content1: e.detail.value
    })
  },
  textareaBInput(e) {
    console.log(e.detail.value);
    this.setData({
      content2: e.detail.value
    })
  },
  commit(e) {
    var that = this;
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(19[0-9]{1}|(18[0-9]{1})))+\d{8})$/;
    if (this.data.name == "") {
      wx.showModal({
        title: '提示',
        content: '未填写项目名称',
        showCancel: false
      })
    } else if (this.data.organization == "") {
      wx.showModal({
        title: '提示',
        content: '未填写发布组织',
        showCancel: false
      })
    } else if (this.data.personname == "") {
      wx.showModal({
        title: '提示',
        content: '未填写联系人名字',
        showCancel: false
      })
    } else if (this.data.phone == "") {
      wx.showModal({
        title: '提示',
        content: '未填写联系人手机号',
        showCancel: false
      })
    } else if (this.data.phone.length != 11 || !myreg.test(this.data.phone)) {
      wx.showModal({
        title: '提示',
        content: '手机号填写不符合格式',
        showCancel: false
      })
    } else if (this.data.limit == "") {
      wx.showModal({
        title: '提示',
        content: '未填写人数限制',
        showCancel: false
      })
    } else if (this.data.content1 == "") {
      wx.showModal({
        title: '提示',
        content: '未填写活动地点',
        showCancel: false
      })
    } else if (this.data.content2 == "") {
      wx.showModal({
        title: '提示',
        content: '未填写项目简介',
        showCancel: false
      })
    } else {
      if (that.data.imgList != '') {

      }
      wx.request({
        url: 'https://chenmoc.com/vt/commit.php',
        method: 'POST',
        data: {
          name: that.data.name,
          organize: that.data.organization,
          cn: that.data.personname,
          cp: that.data.phone,
          amin: that.data.lowage,
          amax: that.data.highage,
          nmax: that.data.limit,
          sd: that.data.beginDate,
          ed: that.data.endDate,
          st: that.data.beginTime,
          et: that.data.endTime,
          ad: that.data.content1,
          de: that.data.content2,
          pn: app.globalData.phone,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          console.log(res.data);
          //返回一个project_id
          for (let i = 0; i < that.data.imgList.length; i++) {
            wx.uploadFile({
              url: 'https://chenmoc.com/vt/uploadimg.php',
              filePath: that.data.imgList[i],
              name: 'file',
              header: {
                "Content-Type": "multipart/form-data"
              },
              formData: {
                id:res.data.id
              },
              success: function (re) {
                if ((that.data.imgList.length - 1) == i) {
                  wx.hideLoading();
                  wx.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000
                  })
                  console.log(re);
                  console.log(re.data);
                  that.setData({
                    imgList: [],
                  });
                  setTimeout(function () {
                    wx.redirectTo({
                      url: '../publisher/publisher',
                    })
                  }, 2000)
                }
              },
              fail: function (re) {
                console.log(re);
              }
            });
          }
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
      })
    }
  },
  Input(e) {
    this.setData({
      input: e.detail.value
    })
  },
  chooseProject(e) {
    console.log(e.currentTarget.dataset.id);
    let id = e.currentTarget.dataset.id;
    // if(id==0)
    // {
    //   //0后端搜索status未审批
    // }else if(id==1){
    //   //1后端搜索 beginDate>当天的项目 
    // }else if(id==2){
    //   //2后端搜索 beginDate<当天<endDate 的项目 
    // }else{
    //   //3后端搜索 当天>endDate 的项目 
    // }
    var that = this
    wx.showLoading({
      title: '加载中',
    })
    //与服务器交互
    wx.request({
      url: 'https://chenmoc.com/vt/missionkind.php',
      method: "POST",
      //0后端搜索 state==0 未审批
      //1后端搜索 startDate>当天 的项目&&state==1  未开始
      //2后端搜索 startDate<=当天<=endDate&&state==1 的项目 进行中
      //3后端搜索 当天>endDate&&state==1 的项目 历史
      //4 state==-1 驳回
      data: {
        op: id,
        phone: app.globalData.phone,
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
        } else { //error_code==0获取数据成功
          that.setData({
            list2: res.data.info
          })
          console.log(that.data.list2);
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
  search(e) {
    
    if(this.data.input==""){
      wx.redirectTo({
        url: '/pages/publisher/publisher',
      })
    }else{
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
              list2: res.data.info
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
    }
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(role);
    this.setData({
      role: app.globalData.role
    })
    var that = this
    wx.showLoading({
      title: '加载中',
    })
    //与服务器交互
    wx.request({
      url: 'https://chenmoc.com/vt/mission.php',
      method: "POST",
      data: {
        phone: app.globalData.phone,
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
        } else { //error_code==0获取数据成功
          that.setData({
            list2: res.data.info
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.tabBar();
  },
  tabBar() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
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