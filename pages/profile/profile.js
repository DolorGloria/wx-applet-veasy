// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"我的",
    menuList:[
      {
        title:'我的活动',
        url:"/pages/myactivity/myactivity"
      }, {
        title:'反馈',
        url:"/pages/feedback/feedback"
      }, {
        title:'我的信息',
        url:"/pages/myprofile/myprofile"
      }, {
        title:'我的记录',
        url:"/pages/myrecords/myrecords"
      }
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
    this.getTabBar().init();
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