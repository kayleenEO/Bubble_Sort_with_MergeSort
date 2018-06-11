describe('Bubble Sort', function() {
  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough();
  });
  it('takes 2 swaps to sort array', function() {
    window.swap();
    expect(window.swap.calls.count()).toEqual(3);
  });
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an array with one element', function() {
    expect(bubbleSort([9])).toEqual([9]);
  });
  it('handles an unsorted array of multiple elements', function() {
    expect(bubbleSort([2, 4, 1, 3])).toEqual([1, 2, 3, 4]);
    //expect(count).toEqual(2);
  });
});
