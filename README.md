## PROBLEM SOLVING

### Understand the Problem :
* Can I restate the problem in my own words?
* What are the inputs that go into the problem?
* What are the outputs that should come from the solution to the problem?
* Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
* How should I label the important pieces of data that are a part of the problem?

### Explore Concrete Examples :
* Start with Simple Examples
* Progress to More Complex Examples
* Explore Examples with Empty Inputs
* Explore Examples with Invalid Inputs

### Break It Down :
* Explicitly write out the steps you need to take.
* This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

### Solve/Simplify :
* Find the core difficulty in what you're trying to do
* Temporarily ignore that difficulty
* Write a simplified solution
* Then incorporate that difficulty back in

### Look Back and Refactor


#### Write a function which takes in a string and returns counts of each character in the string.

##### SOLN : 

```javascript
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
```