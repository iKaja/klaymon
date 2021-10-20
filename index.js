const DJSVersion = require('./package.json').dependencies['discord.js'] || require('./package.json').devDependencies['discord.js'];

	
if(DJSVersion === '^13.1.0' || DJSVersion >= '^13.1.0') {
		module.exports = {
		TicTacToe : require('./src/v13/TicTacToe'),
		Reverse : require('./src/v13/Reverse'),
		PhComment : require('./src/v13/PhComment'),
		RandomMeme : require('./src/v13/RandomMeme'),
		Urban : require('./src/v13/Urban'),
		RoadRace : require('./src/v13/RoadRace'),
		RandomHexColor : require('./src/v13/RandomHexColor'),
		Hangman : require('./src/v13/Hangman')
	
	};
} else {
  throw new TypeError('Klaymon Err: Discord.js version must be 13.1.0 or higher.');
}

//