const customHandlebarsHelpers = require('./handlebars/customHandlebarsHelpers');
const args = require('minimist')(process.argv.slice(2));
const path = require('path');
const scriptPath = path.resolve(__dirname);
const configFile = args.config || path.join(scriptPath, 'config/configTemplate.js');
const iconSvgFixer = require('oslllo-svg-fixer');
const {generateFonts} = require('fantasticon');
let config;
try {
    const resolvedConfigFile = path.resolve(process.cwd(), configFile);
    config = require(resolvedConfigFile);
    // TODO: Incorporate some sort of filtration functionality, so that it only fixes and generates new icons, as opposed to
    //  recompiling every icon in the library every time the script is run
    iconSvgFixer(
        config.cleanIconsOptions.iconsSrcDir,
        config.cleanIconsOptions.iconsCleanedDir,
        config.cleanIconsOptions.svgFixerOptions
    ).fix()
        .then(() => {
            console.log("SVG Files adjusted for proper font generation.");
            return generateFonts(
                config.generateFontsOptions
            ).then(results => console.log(results));
        })
        .catch((err) => {
            throw err
        });
} catch (err) {
    console.error(`Failed to load config file: ${err.message}`)
}