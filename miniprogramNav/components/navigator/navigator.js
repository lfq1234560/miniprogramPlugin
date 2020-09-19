Component({
    properties: {
        //背景颜色
        background: {
            type: String,
            value: "yellow"
        },
        //字体的颜色
        titleColor: {
            type: String,
            value: "#fff"
        },
        // 是否显示返回按钮
        isShowBack: {
            type: Boolean,
            value: true
        },
        //设置标题
        setTitle:{
            type:String,
            value:""
        }
    },
    data: {
        // 导航栏的高度
        height: "",
        //paddingTop值
        paddingTop: "",
        //标题栏的高度
        titleHeight: "",
    },
    attached() {
        let res = wx.getMenuButtonBoundingClientRect();
        wx.getSystemInfo({
            success: (result) => {
                this.setData({
                    height: result.statusBarHeight + res.height + (res.top - result.statusBarHeight) * 3,
                    paddingTop: res.top,
                    titleHeight: res.height,
                })
            },

        })
    },
    methods: {
        //返回上一页
        back(){
            let pages=getCurrentPages();
            if(pages.length>=1){
                wx.navigateBack({
                  delta: 1,
                })
            }
        }
        
    }

})