define([
  'jquery',
  'waterFull'
], function($, WaterFull) {
  var loadMore = (function () {
    function _loadMore($ct) {
      this.$ct = $ct;
      this.$lm = $('.lm');
      this.init();
      this.bind();
    }

    _loadMore.prototype.init = function () {
      let curNum = 14;
      let that = this;
      this.$lm.click(function (event) {
        event.preventDefault();
        that.$lm.hide();
        $.ajax({
          url: '/loadMore',
          dataType: 'json',
          data: {curNum: curNum}
        })
          .done(function (data) {
            let res = data.randomHs;
            curNum = data.num;
            for (let i = 0; i < res.length; i++) {
              let data = res[i];
              let num = i + curNum;
              $(`<div class="item ${data}">${num}</div>`).appendTo(that.$ct)
            }
            WaterFull.init($('.waterFullCt'));
          })
      });
    };

    _loadMore.prototype.bind = function () {
      let that = this;

      $(window).on('scroll', function () {
        let lastItem = $('.item').length;
        let bottom = $('.item').eq(lastItem - 1).offset().top;
        let top = $('.item').eq(0).offset().top;
        let height = bottom - top + 310;
        that.$ct.css({
          "position": "relative",
          "height": height,
          "z-index": "-100"
        });
        that.$lm.show();

      })
    };

    return {
      init: function ($ct) {
        new _loadMore($ct)
      }
    };
  })();
  return loadMore;
});