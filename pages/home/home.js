// home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:'Coderwhy',
      age:19,
      students :[
        {id:1001, name: 'jack',age:30},
        {id:1002, name: 'mark',age:29},
        {id:1003, name: 'mcrk',age:23},
        {id:1004, name: 'sak',age:21},
      ],
      counter:0
  },
  Add(){
    this.setData({
      counter:this.data.counter+1
    })
  },
  Sub (){
     this.setData({
       counter:this.data.counter-1
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