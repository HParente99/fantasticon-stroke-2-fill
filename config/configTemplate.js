const path = require('path');
const config = {
    cleanIconsOptions: {
        iconsSrcDir: path.resolve(__dirname, ''),
        iconsCleanedDir: path.resolve(__dirname, ''),
        svgFixerOptions: {
            showProgressBar: true,
            throwIfDestinationDoesNotExist: true
        }
    },
    generateFontsOptions: {
        name: '',
        inputDir: path.resolve(__dirname, ''),
        outputDir: path.resolve(__dirname, ''),
        fontTypes: [
            require('fantasticon').FontAssetType.EOT,
            require('fantasticon').FontAssetType.TTF,
            require('fantasticon').FontAssetType.WOFF,
            require('fantasticon').FontAssetType.WOFF2
        ],
        assetTypes: [
            require('fantasticon').OtherAssetType.CSS,
        ],
        fontsUrl: '../fonts',
        formatOptions: {},
        templates: {
            css: path.resolve(__dirname, '')
        },
        pathOptions: {
            'eot': path.resolve(__dirname, ''),
            'ttf': path.resolve(__dirname, ''),
            'woff': path.resolve(__dirname, ''),
            'woff2': path.resolve(__dirname, '')
        },
        codepoints: {},
        normalize: true,
        selector: ''

    }
};

module.exports = config;