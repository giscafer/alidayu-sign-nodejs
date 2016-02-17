### alidayu-sign-nodejs

`NodeJS`生成阿里大鱼短信签名、短信发送demo 

**此demo写的不好，推荐使用将短信封装成npm插件的demo**：[alidayujs-demo](https://github.com/giscafer/alidayujs-demo)

**发送成功返回**

```
     {"alibaba_aliqin_fc_sms_num_send_response":{"result":{"err_code":"0","model":"100545278271^1100912293896","success":true},"request_id":"15q8um2g8w8ef"}}

```

![截图](https://github.com/giscafer/alidayu-sign-nodejs/blob/master/images/screenshot.png)

### 使用

使用前看[淘宝官方API文档](http://open.taobao.com/doc2/detail.htm?articleId=101617&docType=1&treeId=1)描述

将`create_dysign.js`文件里边App信息修改为自己的；
并根据需要修改`dayu.js`的config参数
- npm install
- node dayu.js

 
## 推荐使用
[alidayujs](https://github.com/giscafer/alidayujs)（JavaScript Alidayu SDK. 兼容服务器端环境node.js,模块加载器如RequireJS和所有浏览器 ）
