var app = getApp();

Page({
  data:{
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  },
  formSubmit: function(e) {
    wx.request({
      url: 'https://test',
      data: {district:e.detail.value.district, username: e.detail.value.username, password: e.detail.value.password},
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
        app.globalData.hasLogin = true;
        wx.navigateBack({
          delta: 1
        })
      }
    })
  },
  register: function() {
    wx.navigateTo({
      url: '../register/register'
    })
  },
  forget: function() {
    wx.navigateTo({
      url: '../forget/forget'
    })
  }
})