// 1.Write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {
	//make object to return at end

	var result = {};

	//loop over string for each character

	for (var i = 0; i < str.length; i++) {
		var char = str[i].toLowerCase();
		//if char is number/letter AND is a key in the object,add one to count
		if (result[char] > 0) {
			result[char]++;
		}
		//if char is number/letter AND is not in the object,add it to the object and set count to one
		else {
			result[char] = 1;
		}
	}

	return result;
}

let string = "hello man how are you man!";

const count = charCount(string);

console.log(count);
//  {
// 	h: 2,
// 	e: 2,
// 	l: 2,
// 	o: 3,
// 	" ": 5,
// 	m: 2,
// 	a: 3,
// 	n: 2,
// 	w: 1,
// 	r: 1,
// 	y: 1,
// 	u: 1,
// 	"!": 1,
// }

// 2.Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

function validAnagram(first, second) {
	if (first.length !== second.length) {
		return false;
	}

	var lookup = {};

	for (let i = 0; i < first.length; i++) {
		let letter = first[i];

		if (!lookup[letter]) {
			lookup[letter] = 1;
		} else {
			lookup[letter]++;
		}
	}

	for (let i = 0; i < second.length; i++) {
		var letter = second[i];

		!lookup[letter] ? false : (lookup[letter] -= 1);
	}

	return true;
}

const valid = validAnagram("cinema", "iceman");

console.log(valid);
//true
