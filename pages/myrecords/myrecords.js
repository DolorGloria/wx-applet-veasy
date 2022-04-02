// pages/myrecords/myrecords.js
import * as echarts from '../../ec-canvas/echarts';
var initChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"我的记录",
    recordId: '',
		ec: {
			onInit: function(canvas, width, height) {
				initChart = echarts.init(canvas, null, {
					width: width,
					height: height
				});
				canvas.setChart(initChart);
				return initChart;
			}
		},
		firstData: {
 
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