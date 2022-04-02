// pages/profile/feedback.js
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
    title:"反馈",
    description:"反馈可分为普通反馈和匿名反馈。同时你也可以在反馈界面选择你的反馈类型。",
    radioList:[
      {
        title:'活动改进建议',
        data:'1'
      }, {
        title:'活动心得',
        data:'2'
      }, {
        title:'时长异常反馈',
        data:'3'
      }, {
        title:'其他反馈',
        data:'4'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      this.setData({
        radio: event.detail,
      });
    },
  
    onClick(event) {
      const { name } = event.currentTarget.dataset;
      this.setData({
        radio: name,
      });
    },
  }
})
