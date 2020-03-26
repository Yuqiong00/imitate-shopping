Component({
  data: {
      background: ['http://gogocinema-c.oss-cn-shenzhen.aliyuncs.com/imitate-shopping/swiper1.jpg', 'http://gogocinema-c.oss-cn-shenzhen.aliyuncs.com/imitate-shopping/swiper2.jpg', 'http://gogocinema-c.oss-cn-shenzhen.aliyuncs.com/imitate-shopping/swiper3.jpg'],
      // background:["/image/icon_API.png", '/image/icon_API_HL.png', '/image//icon_component.png'],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  methods: {
    changeAutoplay() {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
  
    intervalChange(e) {
      this.setData({
        interval: e.detail.value
      })
    },
  
    durationChange(e) {
      this.setData({
        duration: e.detail.value
      })
    }
  }
})