describe('my own jQuery library', function(){

	var gioQuery;

	beforeEach(function() {
	  gioQuery = new MyLibrary();
	});

	it('is loaded', function(){
		// console.log(gioQuery, 'here')
		expect(gioQuery).toBeDefined();
	});

	it('returns an array', function(){
		expect(gioQuery()).toEqual(['1,2,3']);
	});

	// it('has a method isId', function(){
	// 	// expect(gioQuery.isId()).toBeTruthy();
	// });

	// it('should recognise if a selector is an id', function(){
	// 	// gioQuery.isId('#div');
	// 	// console.log(gioQuery, "look here");
	// 	// expect(gioQuery.isId('#div')).toBeDefined();
	// 	// console.log(gioQuery[0], 'jjjj');
	// 	// expect(gioQuery.elements).toEqual(['div']);
	// 	// expect(gioQuery.isId('#div')).toEqual(['div']);
	// });	
});