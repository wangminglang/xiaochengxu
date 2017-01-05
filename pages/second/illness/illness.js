Page({
    data:{
        items: [
            {title: "保养", selected: "on"},
            {title: "饮食", selected: ""},
            {title: "不孕不育", selected: ""},
            {title: "IT科技", selected: ""},
            {title: "感冒", selected: ""},
            {title: "高血压", selected: ""},
            {title: "护肤", selected: ""},
            {title: "减肥", selected: ""}
        ],
        scrollX: 0,
        lists: [
            {title: "肌肉劳损", detail: "经常跑步会造成肌肉劳损", date: "2016-08-17", num: "3", bigImg: "http://i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png?imageView2/0/w/200/h/200", smallImg: "/images/ico_dazan.png"},
            {title: "肌肉劳损", detail: "经常跑步会造成肌肉劳损", date: "2016-08-17", num: "3", bigImg: "http://i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png?imageView2/0/w/200/h/200", smallImg: "/images/ico_dazan.png"},
            {title: "肌肉劳损", detail: "经常跑步会造成肌肉劳损", date: "2016-08-17", num: "3", bigImg: "http://i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png?imageView2/0/w/200/h/200", smallImg: "/images/ico_dazan.png"},
            {title: "肌肉劳损", detail: "经常跑步会造成肌肉劳损", date: "2016-08-17", num: "3", bigImg: "http://i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png?imageView2/0/w/200/h/200", smallImg: "/images/ico_dazan.png"},
            {title: "肌肉劳损", detail: "经常跑步会造成肌肉劳损", date: "2016-08-17", num: "3", bigImg: "http://i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png?imageView2/0/w/200/h/200", smallImg: "/images/ico_dazan.png"},
            {title: "肌肉劳损", detail: "经常跑步会造成肌肉劳损", date: "2016-08-17", num: "3", bigImg: "http://i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png?imageView2/0/w/200/h/200", smallImg: "/images/ico_dazan.png"},
            {title: "肌肉劳损", detail: "经常跑步会造成肌肉劳损", date: "2016-08-17", num: "3", bigImg: "http://i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png?imageView2/0/w/200/h/200", smallImg: "/images/ico_dazan.png"},
            {title: "肌肉劳损", detail: "经常跑步会造成肌肉劳损", date: "2016-08-17", num: "3", bigImg: "http://i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png?imageView2/0/w/200/h/200", smallImg: "/images/ico_dazan.png"},
            {title: "肌肉劳损", detail: "经常跑步会造成肌肉劳损", date: "2016-08-17", num: "3", bigImg: "http://i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png?imageView2/0/w/200/h/200", smallImg: "/images/ico_dazan.png"},
            {title: "肌肉劳损", detail: "经常跑步会造成肌肉劳损", date: "2016-08-17", num: "3", bigImg: "http://i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png?imageView2/0/w/200/h/200", smallImg: "/images/ico_dazan.png"},
            {title: "肌肉劳损", detail: "经常跑步会造成肌肉劳损", date: "2016-08-17", num: "3", bigImg: "http://i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png?imageView2/0/w/200/h/200", smallImg: "/images/ico_dazan.png"},
            {title: "肌肉劳损", detail: "经常跑步会造成肌肉劳损", date: "2016-08-17", num: "3", bigImg: "http://i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png?imageView2/0/w/200/h/200", smallImg: "/images/ico_dazan.png"},
            {title: "肌肉劳损", detail: "经常跑步会造成肌肉劳损", date: "2016-08-17", num: "3", bigImg: "http://i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png?imageView2/0/w/200/h/200", smallImg: "/images/ico_dazan.png"}
        ]
    },
    select: function(e) {
        for(var i = 0; i < this.data.items.length; i++) {
            this.data.items[i].selected = ""
        }
        var index = e.currentTarget.id
        this.data.items[index].selected = "on"
        this.setData({
            items: this.data.items
        })
        var moveX = 0
        if(index * 60  > 90) {
            moveX = index * 60 - 90
        }else{
            moveX = 0
        }
        this.setData({
            scrollX: moveX
        })
    }
})