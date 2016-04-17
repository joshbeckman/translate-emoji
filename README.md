# translate-emoji

You know how sometimes you read English and it has all these non-word characters (emoji)? Yeah, `translate-emoji` fixes that.

## Install
~~~
npm install translate-emoji
~~~

## Usage
~~~js
var translateEmoji = require('translate-emoji'),
    testString;

testString = '📰 I had a nice day at work! 👩';

console.log(translateEmoji.translate(testString));
// (newspaper) Have a nice day at work! (woman)

console.log(translateEmoji.translate(testString, true));
// Have a nice day at work!

console.log(translateEmoji.containsEmoji(testString));
// true
~~~

### Thanks
A good portion of this is powered by [emojilib][1], a magical json file of emoji names and keywords y'all should use in all your projects.

[1]: https://github.com/muan/emojilib
