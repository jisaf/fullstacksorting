function split(wholeArray) {
	var indexMid = wholeArray.length/2;
    if(wholeArray.length % 2 !== 0) {
		indexMid -= 0.5;
	}

    firstHalf = wholeArray.slice(0,indexMid)
    secondHalf = wholeArray.slice(indexMid, wholeArray.length)

    return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf, array) {
	var newArr = array || [];
	//console.log(newArr)
	if(firstHalf.length === 0) {
		return newArr = newArr.concat(secondHalf)
	} else if (secondHalf.length === 0){
		return newArr = newArr.concat(firstHalf)
	}
	else {
		if(firstHalf[0] < secondHalf[0]) {
			var temp = firstHalf.shift();
		}
		else {
			var temp = secondHalf.shift();
		}
		newArr.push(temp);
		return merge(firstHalf, secondHalf, newArr);
		}
	}

function mergeSort(array) {
	var arr = split(array);
	if(arr[0].length <=1 && arr[1].length <= 1) {
		return merge(array[0],array[1])
	}
	return merge(mergeSort(split(arr[0])), mergeSort(split(arr[1])))

    //if array.length is > 1, split
    //if array is 1, start merge
    // if (array.length === 1){
    // 	//base case merge
    // 	if()
    // } else {
    // 	//split
    // }


}

// mergeSort(split([[1,2,3],[4,5,6]]))