/** 
 * title：表示标题
 * boxShadow：是否由下阴影，字符串1表示有阴影，字符串0表示没有阴影
 * sjx:是否有三角形，字符串1表示有，字符串0表示没有
 **/
Component({
    properties: {
        title: String,
        boxShadow: String,
        sjx:String
    },
    lifetimes:{
        attached() {
            // 获取胶囊的位置
            let buttonLocation = wx.getMenuButtonBoundingClientRect();
            // 渲染页面
            this.setData({
                paddingTop: (buttonLocation.top + buttonLocation.height / 2) * (750 / wx.getSystemInfoSync().windowWidth) + "rpx",
            })
        }
    },
    data: {
        // 向上的padding值
        paddingTop: "",
    },
    methods: {
        //返回页面
        back() {
            let page = getCurrentPages();
            if(page.length===2){
                wx.navigateBack({
                    delta: 1,
                })
            }
        }
    }
})
