Page({
    data: {
    remind: '加载中',
    help_status: false,
    userid_focus: false,
    passwd_focus: false,
    userid: '',
    passwd: '',
    angle: 0
  },
  onReady: function(){
    var _this = this;
    setTimeout(function(){
      _this.setData({
        remind: ''
      });
    }, 1000);
    wx.onAccelerometerChange(function(res) {
      var angle = -(res.x*30).toFixed(1);
      if(angle>14){ angle=14; }
      else if(angle<-14){ angle=-14; }
      if(_this.data.angle !== angle){
        _this.setData({
          angle: angle
        });
      }
    });
  },
    onTap: function (event) {
        wx.redirectTo({
            url: "../movies/movies"
        });
        
    },
     onShareAppMessage: function () {
        return {
        title: '找好电影推荐',
        desc: '进入搜索电影吧',
        path: '/pages/welcome/welcome'
        }
  }
})