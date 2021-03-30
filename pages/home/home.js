// home/home.js
//getaPP()获取App()产生的实例对象
// const app = getApp()

// const name = app.globalData.name;
// const age = app.globalData.age;

//注册一个页面
//页面也有自己的生命周期函数
Page({
  // 2.初始化数据
  data: {
    message: '哈哈哈',
    list: []
  },
  handleGetUserInfo(event){
    console.log(event)
  },
  //---------1.监听页面的生命周期函数
  //页面被加载出来
  onLoad(){
    console.log('onLoad')
    wx.request({
      url: 'https://gank.io/api/v2/banners',
      success: (res) =>{
        console.log(res)
        const data = res.data.data;
      
        this.setData({
          list: data
        })
      }
    })
  },
  //页面显示出来时
  onShow(){
    console.log('onShow')
  },
  //页面初次渲染完成时
  onReady(){
    console.log('onReady')
  },
  //当页面隐藏起来时
  onHide(){
    console.log('onHide')
  },
  //页面销毁时
  onUnload(){
    console.log('onUnload')
  },
  // 3.监听wxml中相关的一些事件
  handleViewClick(){
    console.log('哈哈哈被点击')
  },
  // 4.监听页面的滚动
  onPageScroll(obj){
   // console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log('滚动到底部')
  },
  onPullDownRefresh(){
    console.log('下拉刷新的事件')
  }

})