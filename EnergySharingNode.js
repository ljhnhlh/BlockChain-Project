// // test.js

// // process.nextTick()将在下一轮事件循环中调用:
// process.nextTick(function () {
//     console.log('nextTick callback!');
// });
// console.log('nextTick was set!');

// // 程序即将退出时的回调函数:
// process.on('exit', function (code) {
//     console.log('about to exit with code: ' + code);
// });

var http = require('http');

function sleep(time) {
    var _exit = Date.now() + time * 1000;
    while( Date.now() < _exit ) {}
    return ;
}

var server = http.createServer(function(req, res){
    sleep(10);
    res.end('server sleep 10s');
});

server.listen(8080);