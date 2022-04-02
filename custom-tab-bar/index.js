// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active:0,
    color:"#000",
    selectedColor:"#ff6e41",
    list:[
      {
        "url": "/pages/index/index",
        "text":"首页",
        "iconPath": "/assets/logo/index.png",
        "selectedIconPath": "/assets/logo/index.png"
      },
      {
        "url": "/pages/activity/activity",
        "text":"活动",
        "iconPath": "/assets/logo/activity.png",
        "selectedIconPath": "/assets/logo/activity.png"
      },
      {
        "url": "/pages/profile/profile",
        "text":"我的",
        "iconPath": "/assets/logo/profile.png",
        "selectedIconPath": "/assets/logo/profile.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    onChange(e) {
      console.log(e,'e')
      wx.switchTab({
        url: this.data.list[e.detail].url
      });
      this.setData({ active: e.detail });
   },
   init() {
    const page = getCurrentPages().pop();
    this.setData({
  　  active: this.data.list.findIndex(item =>item.url === `/${page.route}`)
     });
    }
  }
})
