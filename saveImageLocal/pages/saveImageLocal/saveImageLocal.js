Page({
  data: {

  },
  //  // 保存图片
  saveImage() {
    let that = this
    wx.showActionSheet({
      itemList: ['保存到相册'],
      success(res) {
        wx.getSetting({
          success: (res) => {
            if (!res.authSetting['scope.writePhotosAlbum']) {
              wx.authorize({
                scope: 'scope.writePhotosAlbum',
                success: () => {
                  that.saveImgSuccess("https://cdn.xiaolouyou.com/beautiful_getcode.png");
                },
                fail: (res) => {
                  wx.showModal({
                    title: '保存失败',
                    content: '请开启访问手机相册的权限',
                    success(res) {
                      wx.openSetting()
                    }
                  })
                }
              })
            } else {
              that.saveImgSuccess("https://cdn.xiaolouyou.com/beautiful_getcode.png");
            }
          },
        })
      },
    })
  },
  // 同意授权保存到相册
  saveImgSuccess(url) {
    wx.getImageInfo({
      src: url,
      success: (res) => {
        let path = res.path;
        wx.saveImageToPhotosAlbum({
          filePath: path,
          success: (res) => {
            wx.showToast({
              title: '已保存到相册',
            })
          },
        })
      },
    })
  },
})