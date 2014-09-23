$('.terminal').on('click', function () {
    $('.js-last-line').focus();
});

$('.js-last-line').on('keypress', function (e) {
    var key = e.keyCode;
    if (key === 13) {
        $('<div>').text($.trim($('.js-last-line').text())).appendTo($('.js-previous-commands'));
        $('.js-last-line').empty();
    }
});
