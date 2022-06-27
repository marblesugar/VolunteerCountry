// pages/info/info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
        name: '凯尔',
        role: '志愿者',
        phone:'13888888888',
        email:'2998212020@qq.com',
        sexIndex:'',
        sexPicker: ['男', '女'],
        birthday:'2018-01-01',
        region: ['山东省', '济南市', '市中区'],
        color: [0, 0, 0, 0, 0, 0], //0代表黑色，1代表'#E81010'
    },
    nameInput(e) {
        // console.log(e);
        var tempColor=this.data.color;
        var isZeroArray = !tempColor.some(item => item !== 0); // ture则表示是全0数组
        if(tempColor[0] == 1){}
        else{
            if (!isZeroArray) {
           for(var i=0;i<6;i++)//清零
            tempColor[i]=0;
            } 
        tempColor[0]=1;
        this.setData({
            color:tempColor
        })
        }
    },
    sexPicker(e) {
        // console.log(e);
        this.setData({
          sexIndex: e.detail.value
        })
      },
    sexInput(e) {
        // console.log(e);
        var tempColor=this.data.color;
        var isZeroArray = !tempColor.some(item => item !== 0); // ture则表示是全0数组
        if(tempColor[1] == 1){}
        else{
            if (!isZeroArray) {
           for(var i=0;i<6;i++)//清零
            tempColor[i]=0;
            } 
        tempColor[1]=1;
        this.setData({
            color:tempColor
        })
        }
    },
    DateChange(e) {
        this.setData({
          birthday: e.detail.value
        })
      },
    birthInput(e){
        var tempColor=this.data.color;
        var isZeroArray = !tempColor.some(item => item !== 0); // ture则表示是全0数组
        if(tempColor[2] == 1){}
        else{
            if (!isZeroArray) {
           for(var i=0;i<6;i++)//清零
            tempColor[i]=0;
            } 
        tempColor[2]=1;
        this.setData({
            color:tempColor
        })
        }
    },
    RegionChange: function(e) {
        this.setData({
          region: e.detail.value
        })
      },
    regionInput(e){
        var tempColor=this.data.color;
        var isZeroArray = !tempColor.some(item => item !== 0); // ture则表示是全0数组
        if(tempColor[3] == 1){}
        else{
            if (!isZeroArray) {
           for(var i=0;i<6;i++)//清零
            tempColor[i]=0;
            } 
        tempColor[3]=1;
        this.setData({
            color:tempColor
        })
        }
    },
    phoneInput(e){
        var tempColor=this.data.color;
        var isZeroArray = !tempColor.some(item => item !== 0); // ture则表示是全0数组
        if(tempColor[4] == 1){}
        else{
            if (!isZeroArray) {
           for(var i=0;i<6;i++)//清零
            tempColor[i]=0;
            } 
        tempColor[4]=1;
        this.setData({
            color:tempColor
        })
        }
    },
    emailInput(e){
        var tempColor=this.data.color;
        var isZeroArray = !tempColor.some(item => item !== 0); // ture则表示是全0数组
        if(tempColor[5] == 1){}
        else{
            if (!isZeroArray) {
           for(var i=0;i<6;i++)//清零
            tempColor[i]=0;
            } 
        tempColor[5]=1;
        this.setData({
            color:tempColor
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