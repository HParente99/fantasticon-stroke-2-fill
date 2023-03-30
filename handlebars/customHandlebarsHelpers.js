// TODO: Create pull request for fantasticon to incorporate custom helper definition functionality
//  The ability to add a custom helper file to the fantasticon config file would be great
const Handlebars = require('handlebars');

// Define custom helper functions here
Handlebars.registerHelper('replaceSeparator', function (stringToSplit, splitSeparator, separator) {
    const array = stringToSplit.split(new RegExp(splitSeparator, 'g'));
    let result = '';
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            result += array[i];
        } else if (i === 0) {
            result += array[i] + separator;
        } else {
            let array_value = array[i];
            array_value.replace(/^\s+|\s+$/g, '');
            result += array_value + separator;
        }
    }
    return result
});