
/* 响应式侧边栏 */
$(document).ready(function (){
  $('#right-menu').bind("click",function (e) {
    e.preventDefault(); // 阻止默认事件
    return false; // 阻止连接跳转
  });
  $('#right-menu').sidr({
      name: 'sidr-right',
      side: 'right',
      source: '#sidebar',
      speed:0,
      onClose:function () {$('#sidr-right').css('backgroundImage',backgroundPath);}
  });


  // 当窗口大小调整以后，关闭导航条
  $(window).resize(function () {
    $.sidr('close', 'sidr-right');
  });

  $(".background-effect").randomBackground("/img/flower.jpg","/img/flower2.jpg","/img/flower3.jpg","/img/flower4.jpg","/img/flower5.jpg");
  var backgroundPath = $(".background-effect").css('backgroundImage');
  $('#sidr-right').css('backgroundImage',backgroundPath);
});

/* 随机背景 */
/* 接口
 * $(selecor).randomBackground("path/1.jpg","path/2.jpg")
 */
;( function ($) {

  // 生成随机数
  var _getRandomNum = function(Min,Max) {   
    var Range = Max - Min;   
    var Rand = Math.random();   
    return(Min + Math.round(Rand * Range));
  };

  // 根据随机数设置背景
  $.fn.randomBackground = function () {
    var paths = arguments;
    var countPaths = paths.length - 1;
    var backgroundNumber = _getRandomNum(0,countPaths);
    return this.each( function () {
      if (countPaths) {
        $(this).css('backgroundImage','url(' + paths[backgroundNumber] + ')');
      }
    });
  };
})(jQuery);