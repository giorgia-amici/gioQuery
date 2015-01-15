describe('my own jQuery library', function(){

	var gioQuery;

	beforeEach(function() {
	  gioQuery = new MyLibrary
	});

	it('is loaded', function(){
		expect(gioQuery).toBeDefined();
	});

	it('returns an array', function(){
		expect(gioQuery.elements).toEqual([]);
	});

	it('has a method isId', function(){
		// console.log(gioQuery, "here I am")
		expect(gioQuery.isId()).toBeTruthy();
		// expect(gioQuery.isId).toHaveBeenCalled;
		// expect(gioQuery.isId).toBe(true);
	});

	// it('should recognise if a selector is an id', function(){
		
	// });	
});