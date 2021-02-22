// pages/swiper1/index.js
Page({

  data: {
    //弹幕数据
    barrage:[{
      id:1,
      con:"小明：你在干什么啊"
    },
    {
      id:2,
      con:"小强：今天天气怎么样"
    },
    {
      id:3,
      con:"小x：你长得真漂亮"
    },
    {
      id:4,
      con:"小六：风景真美"
    },
    {
      id:5,
      con:"小红：这个世界很公平"
    },
    {
      id:6,
      con:"小康：你是我的全部"
    },
    {
      id:7,
      con:"小李：你怎么这么聪明"
    }
    ],
    //文本框里的内容
    value:"",

  },
  /**
   * description:发送弹幕
   * 
   */
  sendBarrage(){
    
    if(this.data.value.length===0){
      wx.showToast({
        title: "请输入内容",
        icon: "none",
      })
    }else{
      let obj={
        id:this.data.barrage+1,
        con:this.data.value
      };
      this.data.barrage.push(obj)
      this.setData({
        barrage:this.data.barrage
      });
      wx.showToast({
        title: '发送成功',
        icon:"success"
      })
    }
  },
  /**
   * 
   * description:获取内容
   * params{eventObj:事件对象}
   */
  getCon(e){
    console.log(e);
    let val=e.detail.value.trim();
    this.data.value=val;
  }
})