const {Before} = require("@wdio/cucumber-gramwork");

Before({name: 'console log', tags: '@1'}, () => {
	return console.log('before hook');
});