// custom-tab-bar/index.js
Component({
  options: {
    addGlobalClass: true,
  },
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
          "pagePath": "pages/activityList/activityList",
          "text": "项目"
      },
      {
          "pagePath": "pages/talkList/talkList",
          "text": "讨论"
      },
      {
          "pagePath": "pages/commit/commit",
          "text": "发布"
      },
      {
          "pagePath": "pages/publisher/publisher",
          "text": "管理"
      },
      {
          "pagePath": "pages/mine/mine",
          "text": "我的"
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
  
  