// The idea behind big O notation
// Big O notation is the language we use for talking about how long an algorithm takes to run. It's how we compare the efficiency of different approaches to a problem.

// It's like math except it's an awesome, not-boring kind of math where you get to wave your hands through the details and just focus on what's basically happening.

// With big O notation we express the runtime in terms of—brace yourself—how quickly it grows relative to the input, as the input gets arbitrarily large.

// Let's break that down:

// how quickly the runtime grows—It's hard to pin down the exact runtime of an algorithm. It depends on the speed of the processor, what else the computer is running, etc. So instead of talking about the runtime directly, we use big O notation to talk about how quickly the runtime grows.
// relative to the input—If we were measuring our runtime directly, we could express our speed in seconds. Since we're measuring how quickly our runtime grows, we need to express our speed in terms of...something else. With Big O notation, we use the size of the input, which we call "nn." So we can say things like the runtime grows "on the order of the size of the input" (O(n)O(n)) or "on the order of the square of the size of the input" (O(n^2)O(n
// 2
//  )).
// as the input gets arbitrarily large—Our algorithm may have steps that seem expensive when nn is small but are eclipsed eventually by other steps as nn gets huge. For big O analysis, we care most about the stuff that grows fastest as the input grows, because everything else is quickly eclipsed as nn gets very large. (If you know what an asymptote is, you might see why "big O analysis" is sometimes called "asymptotic analysis.")
// If this seems abstract so far, that's because it is. Let's look at some examples.

// Some examples
function printFirstItem(items) {
	console.log(items[0]);
}
// This function runs in O(1)O(1) time (or "constant time") relative to its input. The input array could be 1 item or 1,000 items, but this function would still just require one "step."

function printAllItems(items) {
	items.forEach((item) => {
		console.log(item);
	});
}
//   This function runs in O(n)O(n) time (or "linear time"), where nn is the number of items in the array. If the array has 10 items, we have to print 10 times. If it has 1,000 items, we have to print 1,000 times.

function printAllPossibleOrderedPairs(items) {
	items.forEach((firstItem) => {
		items.forEach((secondItem) => {
			console.log(firstItem, secondItem);
		});
	});
}

//   JavaScript
//   Here we're nesting two loops. If our array has nn items, our outer loop runs nn times and our inner loop runs nn times for each iteration of the outer loop, giving us n^2n
//   2
//     total prints. Thus this function runs in O(n^2)O(n
//   2
//    ) time (or "quadratic time"). If the array has 10 items, we have to print 100 times. If it has 1,000 items, we have to print 1,000,000 times.

// N could be the actual input, or the size of the input
// Both of these functions have O(n)O(n) runtime, even though one takes an integer as its input and the other takes an array:

function sayHiNTimes(n) {
	for (let i = 0; i < n; i++) {
		console.log("hi");
	}
}

function printAllItems(items) {
	items.forEach((item) => {
		console.log(item);
	});
}

// JavaScript
// So sometimes nn is an actual number that's an input to our function, and other times nn is the number of items in an input array (or an input map, or an input object, etc.).

// Drop the constants
// This is why big O notation rules. When you're calculating the big O complexity of something, you just throw out the constants. So like:

function printAllItemsTwice(items) {
	items.forEach((item) => {
		console.log(item);
	});

	// Once more, with feeling
	items.forEach((item) => {
		console.log(item);
	});
}

// JavaScript
// This is O(2n)O(2n), which we just call O(n)O(n).

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
	console.log(items[0]);

	const middleIndex = Math.floor(items.length / 2);
	let index = 0;

	while (index < middleIndex) {
		console.log(items[index]);
		index++;
	}

	for (let i = 0; i < 100; i++) {
		console.log("hi");
	}
}

// JavaScript
// This is O(1 + n/2 + 100)O(1+n/2+100), which we just call O(n)O(n).

// Why can we get away with this? Remember, for big O notation we're looking at what happens as nn gets arbitrarily large. As nn gets really big, adding 100 or dividing by 2 has a decreasingly significant effect.
