// pages/mytalk/mytalk.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatar:'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
        list:[
            {
                'messageID':1,
                'content':'两个数组，单个数组数据不重复，怎么找重复元素？说说思路就好;冒泡排序说一说？插入排序说一说？;你简历上写有一直刷题，给我看看你leetcode主页呗;你项目上的主从复制怎么实现的？;你怎么保证主从数据一致性？    如果出现了某种原因数据不一致了怎么办?',
                'time':'2022-06-24 13:38',
                'collectNum':255,
                'commentNum':25,
            },
            {
                'messageID':2,
                'content':'你用redis做缓存，那有没有考虑过性能的问题？',
                'time':'2022-06-24 13:38',
                'collectNum':23,
                'commentNum':4,
            },
            {
                'messageID':3,
                'content':'读写分离怎么实现的？',
                'time':'2022-06-24 13:38',
                'collectNum':255,
                'commentNum':25,
            },
            {
                'messageID':4,
                'content':'Map线程安全吗?',
                'time':'2022-06-24 13:38',
                'collectNum':6,
                'commentNum':1,
            },
        
            {
                'messageID':5,
                'content':'堆栈的区别说一说',
                'time':'2022-06-24 13:38',
                'collectNum':5,
                'commentNum':25,
            },
            {
                'messageID':6,
                'content':'用过啥数据结构呀？（这里说了数组、链表、栈、集合、队列）为啥不用树？（说平时业务用树比较少，但是刷题刷过很多）',
                'time':'2022-06-24 13:38',
                'collectNum':2,
                'commentNum':1,
            },
            {
                'messageID':7,
                'content':'设计模式了解吗？工厂模式说一说？单例模式呢？Linux用过吗？怎么查询24小时内修改过的文件？',
                'time':'2022-06-24 13:38',
                'collectNum':0,
                'commentNum':0,
            },
            {
                'messageID':8,
                'content':'项目架构是怎么样的?负载均衡怎么实现的？有什么用？',
                'time':'2022-06-24 13:38',
                'collectNum':5,
                'commentNum':5,
            },
            {
                'messageID':9,
                'content':'计算机的内存是怎么存在的？（位图或者链表)局部变量和全局变量在内存中有什么区别?索引的类型有几种？聚簇索引细说一下吧 哈希索引和聚簇索引有什么区别？使用上呢，这两个使用上有什么区别？（当时没答上来，觉得是要从优化那块去说三次握手 三次握手为什么是三次，两次四次行不行？ Linux常用命令，说三个吧 top命令能不能说一说 我想查端口占用情况用什么命令？',
                'time':'2022-06-24 13:38',
                'collectNum':2000,
                'commentNum':10,
            },
        
        ]
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