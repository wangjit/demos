define(['jquery'], function($) {
  var backToTop = (function () {
    function GoTop($ct) {
      this.$ct = $ct;
      this.target = $('<a href = "#" class = "btt">Top</a>');
      this.target.css({
        position: 'fixed',
        right: '100px',
        bottom: '150px'
      });
      this.creatNode();
      this.bindEvent();
    }

    GoTop.prototype.creatNode = function () {
      this.target.appendTo(this.$ct);
      this.target.hide();
    };
    GoTop.prototype.bindEvent = function () {
      var that = this;
      $(window).on('scroll', function () {
        if ($(window).scrollTop() < 100) {
          that.target.hide();
        } else {
          that.target.show();
        }
      });

    };
    return {
      init: function ($ct) {
        new GoTop($ct)
      }
    }
  })();
  //backToTop.init($('body'));
  return backToTop;
});