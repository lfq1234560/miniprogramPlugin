// pages/login/login.js
Page({

  data: {
    //控制请登录按钮的状态
    isBtn: true,
    //控制获取手机号登陆的显示与隐藏
    isFastLogin: false,
    //用户的信息
    rawData: "",

  },
  //点击请登录按钮
  getuserinfo(e) {
    if (e.detail.errMsg === "getUserInfo:ok") {
      wx.setStorage({
        data: JSON.parse(e.detail.rawData),
        key: 'rawData',
      })
      this.setData({
        isFastLogin: true,
        isBtn: false
      })
    }
  },
  //获取手机号
  getphonenumber(e) {
    wx.checkSession({ //看一下登录态是否过期
      success: (res) => { //没有过期，直接调解密接口
          
      },
      fail: (res) => { //过期，先调登录接口，然后再调解密接口

      },

    })

  }

})