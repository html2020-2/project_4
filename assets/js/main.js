$(document).ready(function () {
    $("#cnt1 .bgm .bgm_play").on('click', function () {
        var audio = new Audio('../music/HansZimmer_FirstStep.ogg');

        audio.src = '../music/HansZimmer_FirstStep.ogg';
        audio.loop = true; // 반복재생하지 않음
        audio.volume = 0.5; // 음량 설정
        audio.play(); // sound1.mp3 재생
    });
});