// custom-tab-bar/index.js
Component({
    properties: {
  
    },
    data: {
      selected:0,
      tabList:[
        // {
        //   "pagePath": "pages/index/index",
        //   "text": "首页",
        // },
        {
          "pagePath": "pages/activitylist/activitylist",
          "text": "志愿项目"
        },
        {
          "pagePath": "pages/talklist/talklist",
          "text": "讨论社区"
        },
        {
          "pagePath": "pages/mine/mine",
          "text": "个人信息"
        }
      ]
    },
    methods: {
      switchTab(e){
        console.log(this.data)
        let key = Number(e.currentTarget.dataset.index);
        let tabList = this.data.tabList;
        let selected = this.data.selected;
  
        if(selected !== key){
          this.setData({
            selected:key
          });
          wx.switchTab({
            url: `/${tabList[key].pagePath}`,
          })
        }
      }
    }
  })
  
  