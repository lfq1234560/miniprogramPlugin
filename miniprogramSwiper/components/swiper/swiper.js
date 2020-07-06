
Component({
    properties: {
        //图片信息
        imgs:{
            type:Array,
            value: [
                {
                    id: 1,
                    imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593944970956&di=67e2e4974b947b6152eb87970670567c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201309%2F03%2F20130903141830_Q4Wuc.jpeg"
                },
                {
                    id: 2,
                    imgUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1930662946,3376692344&fm=26&gp=0.jpg"
                },
                {
                    id: 3,
                    imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593944970953&di=021c5546c6e46791c97553aed5822b6f&imgtype=0&src=http%3A%2F%2Fwww.flybridal.com%2Fhuangse%2FaHR0cDovL24uc2luYWltZy5jbi9zaW5hY24xNS8xNjgvdzc1OGgxMDEwLzIwMTgwNTI4L2UxMjktaGNhcXVldjU1MTM5NzUuanBn.jpg"
                },
        ]
        }
    },
    data: {
        //图片信息
        imgs:""
    },
    methods: {
        //点击图片放大
        show(e){
            wx.previewImage({
                current: e.target.dataset.type,
                urls: [e.target.dataset.type],
            })
        }
    },
    lifetimes:{
        attached(){
            // 更新图片
            this.setData({
                imgs: this.data.imgs
            })
        }
    }
})
