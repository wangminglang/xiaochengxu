var app = getApp();

Page({
    data: {
        headList: [
            {title: "常用就诊人", num: "11"},
            {title: "我的订单", num: "98"},
            {title: "我的医生", num: "14"},
            {title: "我的收藏", num: "11"}
        ],
        twoList: [
            {title: "会员卡", num: "3", src: "/images/ico_gerenzhongxin_huiyuanka.png"},
            {title: "医学服务", num: "18", src: "/images/ico_gerenzhongxin_yixuefuwu.png"},
            {title: "绑定服务", num: "", src: "/images/ico_gerenzhongxin_bangdinghuiyuanfuwu.png"}
        ],
        threeList: [
            {title: "余额", num: "0", src: "/images/ico_gerenzhongxin_yue.png"},
            {title: "现金券", num: "4", src: "/images/ico_gerenzshongxin_xianjinquan.png"}
        ],
        fourList: [
            {title: "邀请", src: "/images/ico_gerenzhongxin_kefu@2x.png.png"},
            {title: "在线客服", src: "/images/ico_gerenzhongxin_kefu.png"},
            {title: "关于手机看病", src: "/images/ico_gerenzhongxin_guanyushoujikanbing.png"}
        ],
        name: "登录/注册"
    },
    onShow: function() {
        if(app.globalData.hasLogin) {
            this.setData({
                name: "王明朗"
            })
        }else {
            this.setData({
                name: "登录/注册"
            })
        }
    },
    //点击头像
    headClick: function(e) {
        if(app.globalData.hasLogin) {
            wx.navigateTo({
                url: '../personInfo/personInfo'
            })
        }else {
            wx.navigateTo({
                url: '/pages/login/login/login'
            })
        }
    },
    //点击右上角
    msgClick: function(e) {
        if(app.globalData.hasLogin) {
            wx.navigateTo({
                url: '../msgRemind/msgRemind'
            })
        }else {
            wx.navigateTo({
                url: '/pages/login/login/login'
            })
        }
    }
})