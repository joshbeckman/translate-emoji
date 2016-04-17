
var emojilib = require('emojilib'),
    emojiRegexes = buildRegexes();

/**
 * Replace any emoji with an English translation
 *
 * @access public
 * @param {string} string
 * @param {boolean} remove Remove the emoji without replacement?
 * @return {string} The resulting text
 */
function translate(string, remove) {
    var i,
        translated,
        char,
        emoji;

    translated = string;
    for (i in emojilib.lib) {
        emoji = emojilib.lib[i];
        char = '\\' + emoji.char;
        if (string.match(char)) {
            if (remove) {
                translated = translated.replace(
                    emoji.char,
                    ''
                );
            } else {
                translated = translated.replace(
                    emoji.char,
                    '(' + i.replace('_', ' ') + ')'
                );
            }
        }
    }

    return translated;
}

/**
 * Test a string for emoji existence
 *
 * @access public
 * @param {string} string
 * @return {boolean} Does it contain any emoji?
 */
function containsEmoji(string) {
    var total = false,
        i;

    for (i = emojiRegexes.length - 1; i >= 0; i--) {
        total = total || !!string.match(emojiRegexes[i]);
    }

    return total;
}

/**
 * Build an array of regexes of all available emojis, to test bluntly
 *
 * @access public
 * @return {array} of emoji regex strings
 */
function buildRegexes() {
    var array = [],
        regexes = [],
        count = 0,
        i;

    for (i in emojilib.lib) {
        if (emojilib.lib[i].char) {
            array.push('\\' + emojilib.lib[i].char);
            count++;
            if (!(count % 200)) {
                regexes.push(array.join('|'));
                array = [];
            }
        }
    }

    if (array.length) {
        regexes.push(array.join('|'));
    }

    return regexes;
}

module.exports = {
    translate:          translate,
    containsEmoji:      containsEmoji
};
