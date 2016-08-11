const fs = require('fs')
const path = require ('path')

function findFiles (directoryPath, extensionToFind, callback) {
	fs.readdir(directoryPath, function (error, files) {
		if (error) {
			callback(error);
			return;
		}
		const filteredArray = [];
		for (const file of files) {
			if (path.extname(file) === '.' + extensionToFind) {
				filteredArray.push(file);
			}
		}
		callback(null, filteredArray);
	});
}

module.exports = findFiles;
