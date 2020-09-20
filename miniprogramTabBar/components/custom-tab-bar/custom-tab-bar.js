Component({
    properties: {
        index: {
            type: Number,
            value: 0,
        }
    },
    data: {
        // 选中的索引
        selectIndex: 0,
        // tabBar数据
        tabBar: [{
                pagePath: "/pages/index/index",
                text: "首页",
                iconPath: "../../images/home1.png",
                selectIconPath: "../../images/home2.png"
            },
            {
                pagePath: "/pages/logs/logs",
                text: "日志页",
                iconPath: "../../images/log1.png",
                selectIconPath: "../../images/log2.png"
            }
        ]
    },
    pageLifetimes: {
        show() {
            this.setData({
                selectIndex: this.data.index
            })
        }
    },
    methods: {
        // 点击跳转页面
        switch (e) {
            let index = e.currentTarget.dataset.index;
            wx.switchTab({
                url: this.data.tabBar[index].pagePath,
            })
        }
    },
})