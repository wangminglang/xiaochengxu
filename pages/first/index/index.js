var app = getApp();

Page({
  data:{
    indexSection: [
      {
        src: "/images/ico_mianfeizixun.png",
        class: "anniu1",
        title: "免费咨询",
        detail: "免费咨询文案描述"
      },
      {
        src: "/images/ico_jiaruhuiyuanvip.png",
        class: "anniu2",
        title: "加入会员",
        detail: "免费吃药，打折用药"
      },
      {
        src: "/images/ico_kaiyaomaiyao.png",
        class: "anniu3",
        title: "开药买药",
        detail: "开药买药文案描述"
      },
      {
        src: "/images/ico_yuyuezhuanjia.png",
        class: "anniu4",
        title: "预约专家",
        detail: "预约专家文案描述"
      },
      {
        src: "/images/ico_kanbkaijiatiao.png",
        class: "anniu5",
        title: "看病、开假条",
        detail: "看病、开假条文案描述"
      },
      {
        src: "/images/ico_yixuefuwudingzhi.png",
        class: "anniu6",
        title: "医学服务",
        detail: "医学服务文案描述"
      }
    ],
    imagesUrl: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
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
  click:function(e){
    if(!app.globalData.hasLogin) {
      wx.navigateTo({
        url: '/pages/login/login/login'
      })
      return;
    }
    switch(e.currentTarget.id){
      case "0": {
        wx.navigateTo({
          url: '../freeConsultation/freeConsultation'
        })
      }
      break;
      case "1": {
        wx.navigateTo({
          url: '../joinMember/joinMember'
        })
      }
      break;
      case "2": {
        wx.navigateTo({
          url: '../buyMedicine/buyMedicine'
        })
      }
      break;
      case "3": {
        wx.navigateTo({
          url: '../orderExpert/orderExpert'
        })
      }
      break;
      case "4": {
        wx.navigateTo({
          url: '../leavePage/leavePage'
        })
      }
      break;
      case "5": {
        wx.navigateTo({
          url: '../medicalService/medicalService'
        })
      }
      break;
    }
  },
  imageClick: function(e) {
    wx.navigateTo({
    })
  }
})