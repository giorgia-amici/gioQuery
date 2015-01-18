describe("a library for DOM manipulation", function() {
    var gioQuery;
    var elements;

    beforeEach(function() {
        gioQuery = new MyLibrary();
    });

		it('is loaded', function(){
			console.log(gioQuery);
			expect(gioQuery).toBeDefined();
		});

    it("knows when a selector is a class", function() {
        expect(gioQuery.isClass('.Class')).toEqual(true);
    });

    it("knows when a selector is an id", function() {
        expect(gioQuery.isId('#Id')).toEqual(true);
    });

    it("knows when a selector is a tag", function() {
        expect(gioQuery.isTag('Tag')).toEqual(true);
    });

    it("returns elements by class name", function(){

    });

    it("returns element by id name", function(){

    });

    it("returns elements by tag name", function(){

    });

//         expect(element.outerHTML).toEqual("<img id=\"some_other_id\" class=\"some_class some_other_class\">")


});

