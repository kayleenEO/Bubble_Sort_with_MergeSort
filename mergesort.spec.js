describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,5,4,3])).toEqual([[1,2],[5,4,3]]);
  });
});


describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([[1,2],[3,4,5]])).toEqual([1,2,3,4,5]);
  });
});

describe('mergeSort function', function(){
  it('recursively calls the merge/split functions', function(){
    expect(mergeSort([38,27,43,3,9,82,10])).toEqual([3,9,10,27,38,43,82]);
  });
});
