define([
  'jquery',
  'carousel',
  'goTop',
  'waterFull',
  'loadMore'
], function($, Carousel, backToTop, WaterFull, loadMore) {
  Carousel.init($('.carousel'));
  backToTop.init($('body'));
  WaterFull.init($('.waterFullCt'));
  loadMore.init($('.waterFullCt'));
});