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

    // 인트로

    var $typing = $("#typing");

    // #typing 요소의 내부 문자를 읽어온다.
    var text = $typing.text();

    // #typing 요소의 내부 문자 제거
    $typing.html("");

    // #typing 요소의 내부 문자를 한 글자씩 잘라 배열에 저장
    // → String 객체의 split 메서드
    var chars = text.split("");

    // 배열 chars의 각 문자들을 내부 문자로 갖는 span 요소를 생성해 #typing 요소에 추가
    // → Array 객체의 forEach 메서드
    chars.forEach(function (item) {
        // 문자가 빈칸인 경우에는 HTML 엔티티로 변환
        item = (item == " ") ? "&nbsp" : item;

        $("<p></p>").html(item).appendTo($typing);
    });

    // 캐럿 추가
    var $caret = $("<p></p>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    // 글자를 표시하기 전의 지연 시간(ms)
    var delayStart = 50;

    // 타이핑 속도(ms)
    var speed = 150;

    // 글자들을 보이지 않게 설정한 다음 한 글자씩 화면에 표시
    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });

});