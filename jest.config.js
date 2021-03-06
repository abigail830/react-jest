module.exports = {
    // 单元测试环境根目录
    // rootDir: './__test__',
    // 指定需要进行单元测试的文件匹配规则
    testMatch: [
        '**/__test__/*.test.js'
    ],
    // 需要忽略的文件匹配规则
    testPathIgnorePatterns: [
        '/node_modules'
    ],
    testURL: 'http://localhost/',
    // 是否收集测试覆盖率，以及覆盖率文件路径
    collectCoverage: true,
    coverageDirectory: './coverage'
};
