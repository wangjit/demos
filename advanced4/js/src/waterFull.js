define(['jquery',], function($) {
  var WaterFull = (function () {
    function waterFull($ct) {
      this.$ct = $ct;
      this.init();
      let that = this;
      $(window).resize(function () {
        that.init();
      })
    }

    waterFull.prototype.init = function () {
      let that = this;
      let colLength = parseInt(this.$ct.width() / this.$ct.children().eq(0).width());
      let itemArr = [];
      for (let i = 0; i < colLength; i++) {
        itemArr[i] = 0;
      }

      this.$ct.children().each(function () {
        let minValue = Math.min.apply(null, itemArr);

        let minIndex = itemArr.indexOf(minValue);

        $(this).css({
          top: itemArr[minIndex],
          left: $(this).outerWidth(true) * minIndex
        });

        itemArr[minIndex] += $(this).outerHeight(true);
        that.$ct.parent().css({
          "height": Math.max.apply(null, itemArr) + 100
        });
      });
    };

    return {
      init: function ($ct) {
        new waterFull($ct);

      }
    }
  })();
  return WaterFull;
});