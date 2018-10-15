const server = require('express');
const exec = require('child_process').execSync();

//简单的启动
exec('forever start index.js', {'cwd': '/var/www/myadminAPI'},
    (error, stdout, stderr) => {
        console.log('stdout========================\n' + stdout + '====================================');
        console.log('stderr========================\n' + stderr + '====================================');
        if (error !== null) {
            console.log('初次启动失败！')
        } else {
            console.log('初次启动成功！')
        }
        console.log(error,'初次启动成功')
    });

//指定forever信息输出文件，当然，默认它会放到~/.forever/forever.log
exec('forever start -l forever.log index.js', {'cwd': '/var/www/myadminAPI'},
    (error, stdout, stderr) => {
        console.log('stdout========================\n' + stdout + '====================================');
        console.log('stderr========================\n' + stderr + '====================================');
        if (error !== null) {
            console.log('初始化指定日志文件失败！')
        } else {
            console.log('初始化指定日志文件成功！')
        }
        console.log(error,'初始化指定日志文件成功')
    });

//指定index.js中的日志信息和错误日志输出文件，
//-o 就是console.log输出的信息，-e就是console.error输出的信息
exec('forever start -o out.log -e err.log index.js', {'cwd': '/var/www/myadminAPI'},
    (error, stdout, stderr) => {
        console.log('stdout========================\n' + stdout + '====================================');
        console.log('stderr========================\n' + stderr + '====================================');
        if (error !== null) {
            console.log('初始化指定错误日志文件失败！')
        } else {
            console.log('初始化指定错误日志文件成功！')
        }
        console.log(error,'初始化指定错误日志文件成功')
    });

//追加日志，forever默认是不能覆盖上次的启动日志，
exec('forever start -l forever.log -a index.js', {'cwd': '/var/www/myadminAPI'},
    (error, stdout, stderr) => {
        console.log('stdout========================\n' + stdout + '====================================');
        console.log('stderr========================\n' + stderr + '====================================');
        if (error !== null) {
            console.log('追加日志失败！')
        } else {
            console.log('追加日志成功！')
        }
        console.log(error,'追加日志成功')
    });

//监听当前文件夹下的所有文件改动（文件改动监听并自动重启  ）
exec('forever start -l forever.log -a index.js', {'cwd': '/var/www/myadminAPI'},
    (error, stdout, stderr) => {
        console.log('stdout========================\n' + stdout + '====================================');
        console.log('stderr========================\n' + stderr + '====================================');
        if (error !== null) {
            console.log('监听失败！')
        } else {
            console.log('监听成功！')
        }
        console.log(error,'监听成功')
    });

//监听当前文件夹下的所有文件改动（文件改动监听并自动重启  ）
exec('forever start -w index.js', {'cwd': '/var/www/myadminAPI'},
    (error, stdout, stderr) => {
        console.log('stdout========================\n' + stdout + '====================================');
        console.log('stderr========================\n' + stderr + '====================================');
        if (error !== null) {
            console.log('重启失败！')
        } else {
            console.log('重启成功！')
        }
        console.log(error,'重启成功')
    });


server.listen(5555);
