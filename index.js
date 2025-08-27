// index.js
function helloWorld() {
    console.log("Hello, World!");
    return "Hello, World!";
}

// 导出函数供其他项目使用
module.exports = {
    helloWorld,
    sayHello: () => "Hello from your test package!"
};

// 如果直接运行这个文件，执行 helloWorld
if (require.main === module) {
    helloWorld();
}
