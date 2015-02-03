describe("a library for DOM manipulation", function() {
    var gioQuery;
    var elements;
    var newElement;
    var newArr;
    var parameterButton;

    beforeEach(function() {
        gioQuery = new MyLibrary();
    });

	it('is loaded', function(){
		console.log(gioQuery);
		expect(gioQuery).toBeDefined();
	});

    it("knows when a selector is a class", function() {
        expect(gioQuery.isClass('.class')).toEqual(true);
    });

    it("knows when a selector is an id", function() {
        expect(gioQuery.isId('#id')).toEqual(true);
    });

    it("knows when a selector is a tag", function() {
        expect(gioQuery.isTag('tag')).toEqual(true);
    });

    it("returns elements by class name", function(){
    	elements = gioQuery.fetchElementFromDOM('.some_class')[0]
    });

    it("returns element by id name", function(){
		elements = gioQuery.fetchElementFromDOM('#some_id')[0]
		expect(elements.outerHTML).toEqual('<div id="some_id" class="some_class some_other_class">Hi</div>')
    });

    it("returns elements by tag name", function(){
    	elements = gioQuery.fetchElementFromDOM('img')[0]
        expect(elements.outerHTML).toEqual('<img id="some_other_id" class="some_class some_other_class">')
    });

    it("allows you to create new DOM elements", function(){
    	newElement = document.createElement('p');
    	expect(newElement.outerHTML).toEqual("<p></p>");
    });

    // it("allows you to add a new element at the end of the selected node", function(){
    //     newElement = gioQuery.createCustomElement('p');
    // 	newElement.innerHTML = "";
    // 	elements = gioQuery.fetchElementFromDOM('.unique')
    // 	elements.push(newElement);
    // 	expect(elements.length).toEqual(2);
    // });

    it("allows you to add a class to one of your html element", function(){
    	myNewClassName = 'classGiorgia'
    	elements = gioQuery.fetchElementFromDOM('#some_id');
   		elements.forEach(function(element){element.className = myNewClassName})
   		expect(elements[0].className).toEqual('classGiorgia');
    });

    it("gets all the element of your HTML document", function(){
        expect(document.all[0]).toBeDefined();
    });

    it("allows you to append a new element at the end of each node", function(){
        newElement = gioQuery.createCustomElement('img');
        newElement.innerHTML = ""
        elements = gioQuery.fetchElementFromDOM('.some_class');
        newArr = []
        elements.forEach(function(ele){elements.push(newElement)})
        // console.log(newArr)
        console.log(elements)
        // EXPECTATION GOES HERE
    });

    it("inserts every elemenb v b bb bvbt in the set of matched elements to the end of the target", function(){

    });

    it("get the value of an attribute for the first element in the set of matched elements or sets one", function(){

    });

    it("selects elements just by type", function(){
        var inputTypeButton = 'input[type=button]'
        expect(gioQuery.selectElementsByType(inputTypeButton).outerHTML).toEqual('<input type="button" class="ciao" value="Another useless button">')
    });

    it("selects all button elements and elements of type button", function(){
        parameterButton = "button"
        var inputTypeButton = 'input[type=button]'
        console.log(gioQuery.selectAllButtons(parameterButton, inputTypeButton))
        expect(gioQuery.selectAllButtons(parameterButton, inputTypeButton)).toBeObject
    });




});

