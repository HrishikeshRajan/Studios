module.exports = {
    setupFiles: [
        'dotenv/config'
    ],
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
}