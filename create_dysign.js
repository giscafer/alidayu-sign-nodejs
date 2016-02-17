/**
 * 根据淘宝官网提供的教程
 * http://open.taobao.com/doc2/detail.htm?articleId=101617&docType=1&treeId=1
 */
var md5 = require("blueimp-md5");

// 淘宝应用App信息(换成自己的)
var config = {
    AppKey: '233002**',
    AppSecret: '3403636b338e1003999dd9467**b'
};
exports.config=config;

var dySign = function (obj) {
    // 生成时间戳
    var time = new Date();
    var timestamp = time.getFullYear()  + "-" +
        ("0" + (time.getMonth() + 1)).slice(-2) + "-" +
        ("0" + time.getDate()).slice(-2) + ' '  +
        ("0" + time.getHours()).slice(-2)   + ":" +
        ("0" + time.getMinutes()).slice(-2) + ":" +
        ("0" + time.getSeconds()).slice(-2);
    obj.timestamp = timestamp;

    // 程序key
    obj.app_key = config.AppKey;
    
    // 参数数组
    var arr = [];
    // 循环添加参数项
    for(var p in obj){
        arr.push(p + obj[p]);
    }
    // 2、按首字母升序排列
    arr.sort();
    // 3、连接字符串
    var signStr =  arr.join('');
    var str = config.AppSecret + signStr + config.AppSecret;
    // console.log(msg);

    // 返回
    return md5(str).toUpperCase();
}

module.exports.dySign = dySign;