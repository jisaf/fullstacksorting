describe('Bubble Sort', function(){
	// var bubbleSort;

	// beforeEach(function() {
	// 	bubbleSort = createBubbleSort()
	// });

	// spyOn(bubbleSort, "compare")
	it('handles an empty array', function(){
		expect(bubbleSort([])).toEqual( [] );
		// expect(
	});

	it('sorts that shit', function(){
		expect(bubbleSort([3,4,1,5,2,8,10])).toEqual([1,2,3,4,5,8,10]);
	});

	it('sorts that worst case shit', function(){
		expect(bubbleSort([10,9,8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8,9,10]);
	});
	it('sorts that worst case shit', function(){
		expect(bubbleSort([4,5,8,2,9,1,3,10,6,7])).toEqual([1,2,3,4,5,6,7,8,9,10]);
	});


});