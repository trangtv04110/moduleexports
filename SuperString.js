module.exports = {
	invert: function(str) {
		var result = '';
		for (var i = str.length - 1; i >= 0; i--) {
			result += str[i];
		};
		return result;
	},

	camelCase: function(str) {
		var words = str.split(' ');
		for(var i = 0; i < words.length; i++) {
			if(i == 0) {
				words[i] = words[i].toLowerCase();
			} else {
				var temp = '';
				for(var j = 0; j < words[i].length; j++) {
					temp += (j == 0) ? words[i][j].toUpperCase() : words[i][j].toLowerCase()
				}
				words[i] = temp;
			}
		}
		return words.join(' ');
	},

	longestWord: function(str) {
		var count = 0;
		var longest = [];
		var words = str.split(' ');
		for(var i = 0; i < words.length; i++) {
			if(words[i].length > count) {
				count = words[i].length;
				longest = [];
				longest.push(words[i]);
			} else if(words[i].length == count) {
				longest.push(words[i]);
			}
		}
		return longest.join(', ');
	}
};