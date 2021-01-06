$(document).ready(function () {
    // 네비게이션

    var _dep1 = $('#gnb > ul');
    var _first = _dep1.find('.first');
    var _last = _dep1.find('.last');

    $('#gnb > btn_box').on('click', function () {
          $(this).parent().toggleClass('on');
          if ($(this).parent().hasClass('on')) { //열려진 경우라면
            _dep1.stop().animate({
              right: '-100%'
            }, 300, function () {
              $(this).parent().css({
                visibility: 'hidden'
              });
            });
            $(this).removeClass('on').text('MENU');
          } else { //닫겨진 경우라면
            $(this).addClass('on').text('EXIT');
            _dep1.css({
              visibility: 'visible'
            }).stop().animate({
              left: 0
            }, 300, function () {
              _first.focus(); //대상 엘리먼트에 포커스를 강제로 이동
            });
          }

          _first.on('keydown', function (e) {
            if (e.shiftKey && e.keyCode === 9) {
              e.preventDefault();
              _last.focus();
            }
          });
          _last.on('keydown', function (e) {
            if (!e.shiftKey && e.keyCode === 9) {
              e.preventDefault();
              _first.focus();
            }
          });
    });

});