Page({
    data: {
       list: [
           {title: '诊前、分诊、康复咨询记录'},
           {title: '诊断、开药记录'},
           {title: '专家图文咨询记录'},
           {title: '专家视频咨询记录'},
           {title: '电子病历'},
           {title: '电子处方'}
       ] 
    },
    itemClick: function(e) {
        switch (e.currentTarget.id) {
            case "0":
                {
                    wx.navigateTo({
                      url: '../netAdviceList/netAdviceList'
                    })
                }
                break;
            case "1":
                {
                    wx.navigateTo({
                      url: '../videoInquiryList/videoInquiryList'
                    })
                }
                break;
            case "2":
                {
                    wx.navigateTo({
                      url: '../netAdviceList/netAdviceList'
                    })
                }
                break;
            case "3":
                {
                    wx.navigateTo({
                      url: '../videoInquiryList/videoInquiryList'
                    })
                }
                break;
            case "4":
                {
                    wx.navigateTo({
                      url: '../emrList/emrList'
                    })
                }
                break;
            case "5":
                {
                    wx.navigateTo({
                      url: '../prescriptionList/prescriptionList'
                    })
                }
                break;
        }
        
    }
})