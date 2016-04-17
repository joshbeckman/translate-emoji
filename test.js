var assert = require('chai').assert,
    translateEmoji = require('./index.js');

describe('translate-emoji', function() {
    describe('#containsEmoji', function () {
        it('should return false when emoji are not present',
        function () {
            assert.equal(false, translateEmoji.containsEmoji('hello, who?'));
            assert.equal(false, translateEmoji.containsEmoji('Why not!?'));
        });
        it('should return true when emoji are present',
        function () {
            assert.equal(true, translateEmoji.containsEmoji(
                '📰 I had a nice day at work! 👩'
            ));
        });
    });
    describe('#translate', function () {
        it('should translate emoji',
        function () {
            assert.equal(
                '(newspaper) I had a nice day at work! (woman)',
                translateEmoji.translate(
                    '📰 I had a nice day at work! 👩'
                )
            );
        });
        it('should remove emoji, upon request',
        function () {
            assert.equal(
                ' I had a nice day at work! ',
                translateEmoji.translate(
                    '📰 I had a nice day at work! 👩',
                    true
                )
            );
        });
    });
});
