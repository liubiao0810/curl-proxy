/**
 * @File:      server启动
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-10-23 17:12:07
 */
var app = require('lg-server');
var static_dir = './web';
var curlProxy = require('../index.js');
var headers = {
    host: 'www.163.com',
    referer: 'http://www.163.com'
};
app.setHeaders(headers);
app.createServer(static_dir, function (req, res) {
    var me = {};
    me.req = req;
    me.res = res;
    curlProxy.request(me);
});