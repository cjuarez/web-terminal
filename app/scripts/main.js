$(function () {
    'use strict';
    $.mockjax({
      url: '/rest/execute',
      responseTime: 150,
      type: 'post',
      responseText: 'I got it. Now give me the next command.'
    });
    var status = 'celsojuarez at MBA in ~/Github/web-terminal';
    $('<div class="status">').text(status).appendTo($('.js-previous-commands'));
    $('.terminal').on('click', function () {
        $('.js-last-line').focus();
    });

    $('.js-last-line').on('keypress', function (e) {
        var key = e.keyCode;
        if (key === 13) {
            var command = $('.js-last-line').text();
            $('<div>').text(command).appendTo($('.js-previous-commands'));
            $.post('/rest/execute', command, function (response) {
                $('<div>').text(response).appendTo($('.js-previous-commands'));
                $('<div class="status">').text(status).appendTo($('.js-previous-commands'));
            });
            $('.js-last-line').empty();
            return false;
        }
    });
});
