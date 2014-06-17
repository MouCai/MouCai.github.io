$(document).ready(function () {
  // 
  // $(".background-effect").fixIeBackgroundBug();
  // 禁用水平滚动条，简单粗暴，明显没有BUG
  document.body.parentNode.style.overflowX="hidden";
});

/* 设置元素的宽度为屏幕的宽度 */
/* 修正某个元素设置 width:100% 的时候， IE 7 8 背景在横向滚动时不显示的问题 */
/* 没有明显BUG */
;(function($) {
  $.fn.fixIeBackgroundBug = function () {
    // 获取屏幕宽度
    return this.each(function () {
      var el = $(this);
      $(window).scroll(function () {
        var screenWidth = screen.availWidth;
        $(el).css("width",screenWidth+"px");
      });
      $(window).resize(function () {
        var screenWidth = screen.availWidth;
        $(el).css("width",screenWidth+"px");
      });
    });
  }
})(jQuery);
