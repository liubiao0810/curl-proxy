/**
 * @file:      curl 测试
 * @author:    花夏(liubiao@itoxs.com)
 * @version:   V0.0.1
 * @date:      2016-10-23 16:47:36
 */

$(function () {
    $('.httpGet').click(function () {
        http.get(function (data) {
            $('.http-content').html(data);
        });
    });
    $('.httpsGet').click(function () {
        https.get();
    });
});
var http = {
    get: function (cal) {
        $.ajax({
            url: '/special/00774IMH/n_house_bj_01_201405.html',
            // url: '/a/b',
            type: 'GET',
            beforeSend: function( xhr ) {
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            }
        })
        .done(function(json) {
            cal && cal(json);
        })
        .fail(function() {
            
        });
    }
};
var https = {
    get: function () {
        $.ajax({
            url: 'https://www.baidu.com',
            type: 'GET',
        })
        .done(function(JSON) {
            console.log(json);
        })
        .fail(function() {
            
        });
    }
};