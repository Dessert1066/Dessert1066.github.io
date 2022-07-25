module.exports = {
    //是否显示覆盖率报告
    collectCoverage: true,
    //告诉jest哪些文件需要经过单元测试测试
    collectCoverageFrom: ['src/compiler.js','src/dep.js','src/index.js','src/observer.js','src/watcher.js'],
    testEnvironment: "jsdom",
}