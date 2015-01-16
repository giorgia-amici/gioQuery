describe('my own jQuery library', function(){

	var gioQuery;

	beforeEach(function() {
	  gioQuery = new MyLibrary();
	});

	it('is loaded', function(){
		console.log(gioQuery);
		expect(gioQuery).toBeDefined();
	});

	it('returns an array', function(){
		expect(gioQuery.isClass('.some_class')).toBeTruthy();
	});

	// it('has a method isId', function(){
	// 	// expect(gioQuery.isId()).toBeTruthy();
	// });

	// it('should recognise if a selector is an id', function(){
	// 	// gioQuery.isId('#div');
	// });	






});