describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
  	expect(split([1,2,3,4])).toEqual([[1,2],[3,4]])
  });
    it('is able to split an array into two halves', function() {
  	expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]])
  });
  it('is able to split an array into two halves', function() {
  	expect(split([1])).toEqual([[],[1]])
  });
});

describe('Merge Sort', function(){
    it('is able to merge two single item arrays', function(){
      expect(merge([1],[2])).toEqual([1,2])
    });
    it('is able to merge two single item arrays', function(){
      expect(merge([],[1])).toEqual([1])
    });
    it('is able to merge two sorted arrays with 2 elements', function(){
      expect(merge([1,2],[3,4,5])).toEqual([1,2,3,4,5])
    });
    it('is able to merge two sorted arrays with 2 elements a different order', function(){
      expect(merge([3,4],[1,2])).toEqual([1,2,3,4])
    });
    it('is able to merge two sorted arrays with 4 elements', function(){
      expect(merge([0,1,2,3,4],[5,6,7,8])).toEqual([0,1,2,3,4,5,6,7,8])
    });
});

describe('mergeSort that shit', function() {
  it('is able to split and merge a 4 item array array', function() {
  	expect(mergeSort([3,4,1,2])).toEqual([1,2,3,4])
  });
	it('is able to split and merge a 4 item array array', function() {
  	expect(mergeSort([0,2,1,5,3,6,4,7,8])).toEqual([0,1,2,3,4,5,6,7,8])
  });
  it('is able to split and merge a 4 item array array', function() {
  	expect(mergeSort([3,4,1,2])).toEqual([1,2,3,4])
  });
});

