var app = getApp();

Page({
    logout: function(e) {
        wx.showModal({
            title: '提示',
            content: '是否要退出当前账号',
            success: function(res) {
                if (res.confirm) {
                    app.globalData.hasLogin = false;
                    wx.navigateBack({
                      delta: 2
                    })
                }else {

                }
            }
        })
        
    }
})