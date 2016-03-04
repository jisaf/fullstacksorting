// // single function
// var bubbleSort = function (arr){
// 	var arr = arr
// 	var compareCount = 0
// 	var swapCount;
// 	for (var j = 1; j < arr.length; j++) {//set to 1 because we're using this on the inner loop to count to not the end
// 		console.log(swapCount, compareCount) // shows that stuff stops
// 		if (swapCount === 0){break} // if we didn't move anything, break out
// 			swapCount = 0 // because we did change things, update last count for a new round
// 			for (var i = 0 ; i < arr.length-j; i++) {
// 				compareCount++ // we've got another comparison going on...dunno why it's useful
// 				if (arr[i] > arr[i+1]) { // compare
// 					swapCount++ // if we move something, increment
// 					var var1 = arr[i]; // swap
// 					var var2 = arr[i+1];
// 					arr[i+1] = var1;
// 					arr[i] = var2;
// 				}
// 				console.log(arr)
// 			}
// 	}
// 	return arr
// }

//broken into mutliple functions for clarity
var bubbleSort = function(arr){
	// var sortable = {}
	var arr = arr
	var swapCount = null;
	var sort = function(arr){
		// console.log("we're sorting")
		// console.log("starting with", arr)
		for (var j = 1; j < arr.length; j++) {
			if (efficiencyBreak()){break};
			for (var i = 0; i < arr.length-j; i++) {
				// console.log("started a loop on", arr)
				compare(i)
			}
		}
		return arr
	}
	var compare = function(i){
		// console.log("comparing", arr[i], arr[i+1])
		if (arr[i] < arr[i+1]) {
			return 
		} else {
			swap(i)
		}
	}
	var swap = function(i){
		// console.log("swapping", arr[i], arr[i+1])
		var var1 = arr[i];
		var var2 = arr[i+1];
		arr[i+1] = var1;
		arr[i] = var2;
		swapCount++
		// console.log("swapped", arr[i], arr[i+1])
	}

	var efficiencyBreak = function(){
		// console.log(swapCount)
		if (swapCount === 0){
			console.log("took a break")
			//could set a break flag in here for testing, but not sure how to run it or test for it.
			return true
		}
		swapCount = 0
		return false
	}
	var result = sort(arr)
	return result

}



//doesn't work at all
// bubbleSort.prototype.compare = function(i){
	
// 	if (this.arr[i] < this.arr[i+1]) {
// 		return 
// 	} else {
// 		swap.call(this, i)
// 	}
// }

// bubbleSort.prototype.swap = function(i){
// 	var var1 = this.arr[i];
// 	var var2 = this.arr[i+1];
// 	this.arr[i+1] = var1;
// 	this.arr[i] = var2;
// }

// bubbleSort.prototype.sort = function(){

// 	var i = 0
// 	for (var j = 1; j < arr.length; j++) {
// 		for (i = 0; i < arr.length-j; i++) {
// 			if (this.arr[i] < this.arr[i+1]) {
// 				return 
// 			} else {
// 				swap.call(this, i)
// 			}
// 		}
// 	}
// 	return this.arr
// }