module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /locales/,
                    loader: '@alienfast/i18next-loader'
                }
            ]
        }
    }
}