// import { request } from "http";

Page({

     /**
      * 页面的初始数据
      */
     data: {
          navList: [],
          // 被点击菜单的索引值
          currentIndexNav: 0,
          swiperList: [],
          videosList: []
     },


     getnavList () {
          let that = this
          wx.request({
               url: "https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/navList",
               success (res) {
                    // console.log(res);
                    if (res.data.code === 0) {
                         that.setData({
                              navList: res.data.data.navList

                         })
                    }

               }
          })
     },
     getlunbo () {
          let that = this
          wx.request({
               url: "https://www.fastmock.site/mock/6907fc94db7def085d5f47570c6481b6/bili/swiperList",
               success (res) {
                    // console.log(res);
                    if (res.data.code === 0) {
                         that.setData({
                              swiperList: res.data.data.swiperList
                         })
                    }


               }
          })
     },
     getvideosList () {
          let that = this
          wx.request({
               url: "https://www.fastmock.site/mock/6907fc94db7def085d5f47570c6481b6/bili/videosList",
               success (res) {
                    console.log(res);
                    if (res.data.code === 0) {
                         that.setData({
                              videosList: res.data.data.videosList
                         })
                    }

               }
          })
     },
     activeNav (res) {
          // console.log(12);
          // console.log(res);
          this.setData({
               currentIndexNav: res.target.dataset.index
          })


     },
     /**
      * 生命周期函数--监听页面加载
      */
     onLoad: function (options) {
          this.getnavList()
          this.getlunbo()
          this.getvideosList()
     },

     /**
      * 生命周期函数--监听页面初次渲染完成
      */
     onReady: function () {

     },

     /**
      * 生命周期函数--监听页面显示
      */
     onShow: function () {

     },

     /**
      * 生命周期函数--监听页面隐藏
      */
     onHide: function () {

     },

     /**
      * 生命周期函数--监听页面卸载
      */
     onUnload: function () {

     },

     /**
      * 页面相关事件处理函数--监听用户下拉动作
      */
     onPullDownRefresh: function () {

     },

     /**
      * 页面上拉触底事件的处理函数
      */
     onReachBottom: function () {

     },

     /**
      * 用户点击右上角分享
      */
     onShareAppMessage: function () {

     }
})