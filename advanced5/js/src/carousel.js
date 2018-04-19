define(['jquery'], function($) {
  var Carousel = (function () {
    function _Carousel($ct) {
      this.$ct = $ct;
      this.init();
      this.bind();
    }

    _Carousel.prototype.init = function () {
      var $imgs = this.$imgs = this.$ct.find($('.carousel .img-ct >li'));
      var $imgCt = this.$imgCt = this.$ct.find($('.carousel .img-ct'));
      var $preBtn = this.$preBtn = this.$ct.find($('.carousel .pre'));
      var $nextBtn = this.$nextBtn = this.$ct.find($('.carousel .next'));
      var $bullets = this.$bullets = this.$ct.find($('.bullet li'));

      this.pageIndex = 0;
      this.isAnimate = false;

      this.imgCount = $imgs.length;
      this.imgWidth = $imgs.width();
      $imgCt.append(this.$imgs.first().clone());
      $imgCt.prepend(this.$imgs.last().clone());
      $imgCt.width((this.imgCount + 2) * this.imgWidth);
      $imgCt.css({
        left: -this.imgWidth
      });
    };

    _Carousel.prototype.bind = function () {
      var that = this;
      this.$preBtn.on('click', function (e) {
        e.preventDefault();
        that.playPre(1);
      });
      this.$nextBtn.on('click', function (e) {
        e.preventDefault();
        that.playNext(1);
      });
      this.$bullets.on('click', function () {
        var index = $(this).index();
        if (index > that.pageIndex) {
          that.playNext(index - that.pageIndex);
        } else if (index < that.pageIndex) {
          that.playPre(that.pageIndex - index);
        }
      });
    };
    _Carousel.prototype.playNext = function (len) {
      var that = this;
      if (this.isAnimate) {
        return;
      }
      this.isAnimate = true;
      this.$imgCt.animate({
        left: '-=' + len * this.imgWidth
      }, function () {
        that.pageIndex += len;
        if (that.pageIndex === that.imgCount) {
          that.pageIndex = 0;
          that.$imgCt.css({
            left: -that.imgWidth
          })
        }
        that.setBullet();
        that.isAnimate = false;
      })
    };
    _Carousel.prototype.playPre = function (len) {
      var that = this;
      if (this.isAnimate) {
        return;
      }
      this.isAnimate = true;
      this.$imgCt.animate({
        left: '+=' + len * this.imgWidth
      }, function () {
        that.pageIndex -= len;
        if (that.pageIndex < 0) {
          that.pageIndex = that.imgCount - 1;
          that.$imgCt.css({
            left: -that.imgCount * that.imgWidth
          })
        }
        that.setBullet();
        that.isAnimate = false;
      })
    };

    _Carousel.prototype.setBullet = function () {
      this.$bullets.removeClass('active').eq(this.pageIndex).addClass('active');
    };
    return {
      init: function ($ct) {
        $ct.each(function (index, node) {
          new _Carousel($(node))
        })
      }
    }
  })();
  //Carousel.init($('.carousel'));
  return Carousel;
  
});