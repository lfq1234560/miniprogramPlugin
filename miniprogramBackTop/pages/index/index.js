Page({
    data:{
        //定位的顶部距离
        top:"",
        // 返回的顶部距离
        backTop:"",
    },
    onLoad(){
        wx.setStorageSync("idx",1);
    },
    onPageScroll(e){
        this.data.backTop=e.scrollTop;
    },
    onShow(){
        // 获取顶部距离
        this.data.top=wx.getSystemInfoSync().windowHeight; 
        this.setData({
            top: (this.data.top/1.2)+"px",
        })
    },
    // 页面跳到日志页
    go(){
        wx.switchTab({
            url: '/pages/logs/logs',
        })
    },
    // 回到顶部
    goTop(){
        wx.pageScrollTo({
            scrollTop: this.data.backTop+"px",
            duration: 300+"ms",
        })
    }

})
