var helperTb = require('./create_dysign');
var http = require('http');
var qs = require('querystring');

var alidayuUrl = 'http://gw.api.taobao.com/router/rest';
// 短信发送的参数对象
var obj = {
    format: 'json',
    method: 'alibaba.aliqin.fc.sms.num.send',
    v: '2.0',
    timestamp: '2016-1-16 02:33:30',
    partner_id: 'top-sdk-nodejs-20160116',
    rec_num: '15110****', //手机号多个以逗号间隔
    sign_method: 'hmac',
    sms_type: 'normal',
    sms_param: '{"code":"giscafer","product":"alidayu短信测试"}',
    sms_free_sign_name: '身份验证',
    sms_template_code: 'SMS_4725038'
}
//生成签名并拼接请求参数链接
var sign = helperTb.dySign(obj);
console.log('签名：', sign);

obj.sign = sign;
obj.app_key = helperTb.config.AppKey;
var arr = [];
for (var p in obj) {
    arr.push(p + '=' + obj[p]);
}
var msg = arr.join('&')
var sendurl = alidayuUrl + '?' + msg;
console.log('完成请求地址：' + sendurl);

/**
 * 短信发送请求测试
 */
var params = qs.stringify(obj);
var options = {
    hostname: 'gw.api.taobao.com',
    port: 80,
    path: '/router/rest?' + params,
    method: 'GET'
};
var req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    // console.log('HEADERS: ' + JSON.stringify(res.headers));
    // console.log(req.path);
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('RESULT: ' + chunk);
    });
});

req.on('error', function (e) {
    console.log('ERROR: ' + e.message);
});

// write data to request body
req.write("执行完毕！");

req.end();
