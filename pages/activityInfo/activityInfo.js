// pages/activityinfo/activityinfo.js
var app=getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        TabCur: 0,
        scrollLeft:0,
        ColorList:[
          {
            'name':'grey',
            'shadow':1,
          },
          {
            'name':'red',
            'shadow':1,
          }
        ],
        list:["阅读协议","项目信息","项目简介"],
        content1:"本人作为一名深圳志愿者，清楚了解当前新型冠状病毒感染肺炎疫情对公共健康和个人生命的危害。我自愿加入疫情防控志愿者，积极参加疫情防控工作。本人承诺：近一个月没有发热、咳嗽、胸闷等呼吸道感染病史。坚决服从命令、听从指挥，自觉践行“奉献、友爱、互助、进步”的志愿服务精神，尽己所能，不计报酬，帮助他人，服务社会，带头执行科学防疫和自我防护措施，确保完成任务。",
        list1:[
            {
               'number':'36712255',
               'name':'广场核酸志愿者扫码',
               'publisher':'南圆社区志愿者队',
               'date':'2022-06-12',
               'time':'15:30-18:30',
               'begin':'2022-06-11 15:14',
               'place':'南山街道南苑社区南园村新四方2号楼1楼',
               'person':'黄女士',
               'phone':'13888888888',
               'account':'2/3',
               'limit':'/',
               'content':'请报名的义工们提前10~20分钟到南园社区党群服务中心一楼前台签到，更换隔离衣。要带手机，充电宝，要进行核酸扫码工作。 如果需要用餐，请至少提前半个小时到达。谢谢。希望大家多多参与南园社区义工活动，感谢大家'
            }
        ],
        
      },
      tabSelect(e) {
        this.setData({
          TabCur: e.currentTarget.dataset.id,
          scrollLeft: (e.currentTarget.dataset.id-1)*60
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