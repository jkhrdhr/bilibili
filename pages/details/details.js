// import { request } from "http";

// pages/details/details.js
Page({

     /**
      * 页面的初始数据
      */
     data: {
          videoDetail: [],
          getothersList: [],
          commentsList: [],
          commentTotalCount: null

     },

     // 视频详情页面
     getvideoDetail (videoid) {
          let that = this
          wx.request({
               url: "https://www.fastmock.site/mock/6907fc94db7def085d5f47570c6481b6/bili/videoDetail?id=" + videoid,
               success (res) {

                    // console.log(res);
                    if (res.data.code == 0) {
                         that.setData({
                              videoDetail: res.data.data.videoInfo

                         })

                    } else {
                         console.log('a');

                    }

               }
          })

     },
     // 推荐视频模块
     getothersList (id) {
          let that = this
          wx.request({
               url: "https://www.fastmock.site/mock/6907fc94db7def085d5f47570c6481b6/bili/othersList?id=" + id,
               success (res) {
                    // if()
                    // console.log(res);
                    if (res.data.code === 0) {
                         that.setData({
                              getothersList: res.data.data.othersList
                         })
                    }

               }
          })
     },
     getcommentsList (id) {
          let that = this
          wx.request({
               url: "https://www.fastmock.site/mock/6907fc94db7def085d5f47570c6481b6/bili/commentsList?id=" + id,
               success (res) {
                    console.log(res);
                    if (res.data.code === 0) {
                         that.setData({
                              commentsList: res.data.data.commentData.commentList,
                              commentTotalCount: res.data.data.commentData.commentTotalCount
                         })
                    }

               }
          })
     },

     /**
      * 生命周期函数--监听页面加载
      */
     onLoad: function (options) {
          // console.log(options.id);
          this.getvideoDetail(options.id)
          this.getothersList(options.id)
          this.getcommentsList(options.id)
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