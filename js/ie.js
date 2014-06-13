$(document).ready(function () {
  $(".search input[placeholder]").placeholder();
});

/* 让 IE 6,7,8,9 支持 placeholder 属性 */
/*
 * $(selector).placeholder();
 */
;(function ($) {
  $.fn.placeholder = function () {
    return this.each(function () {

      var placeholder = $(this).attr('placeholder');
      if(!placeholder) {
        return;
      };

      $(this).val(placeholder);
      $(this)
        .bind('click',function () {
          var value = $(this).val();
          if(value == placeholder) {
            $(this).val("");
          }
        })
        .bind('blur',function () {
          var value = $(this).val();
          if(value.replace(/\s+/,'').length == 0) {
            $(this).val(placeholder);
          }
        });

    });
  };
})(jQuery);