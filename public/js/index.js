var MyLibrary = function(){
    this.myEle
    this.elements = [];
};

 MyLibrary.prototype.isTag = function(selector) {
    if(selector[0] !== '.' && selector[0] !== '#')
    return true;
};

MyLibrary.prototype.isClass = function(selector){
    if(selector[0] === '.')
    return true;
};

MyLibrary.prototype.isId = function(selector){
    if(selector[0] === '#')
    return true;
};

MyLibrary.prototype.fetchElementFromDOM = function(selector){
    if(this.isTag(selector) === true){
        this.elements = Array.prototype.slice.call(document.getElementsByTagName(selector))
    }
    if(this.isClass(selector) === true){
        this.elements = Array.prototype.slice.call(document.getElementsByClassName(selector.slice(1)))
    }
    if(this.isId(selector) === true){
        this.elements = Array.prototype.slice.call([document.getElementById(selector.slice(1))])
    }
    return this.elements 
};

MyLibrary.prototype.createCustomElement = function(string){
    return this.myEle = document.createElement(string);
};

MyLibrary.prototype.addMyElement = function(selector, toAdd){
    this.createCustomElement(toAdd)
    this.myEle.innerHTML = '';    //has to have a content
    this.fetchElementFromDOM(selector).push(this.myEle);
};

MyLibrary.prototype.addMyClass = function(selector, myNewClassName){
    this.fetchElementFromDOM(selector);
    this.elements.forEach(function(element){
        element.className = myNewClassName;
    })
};

MyLibrary.prototype.getAll = function(){
    return document.all
};

// similar to addMyElement but this method here appends
// at the end of each matched element!
MyLibrary.prototype.myAppend = function(selector, toAppend){
    this.createCustomElement(toAppend)
    this.myEle.innerHTML = ""
    var ele = this.myEle
    // this.fetchElementFromDOM(selector).forEach(function(element){element, ele)})
};

MyLibrary.prototype.selectAllButtons = function(selector){
    // needs to fetch the ones whose tag name is button
    this.fetchElementFromDOM('button')
    // needs to fetch also the one whose type is button
    // $('input[type=button],select');
};



var gio = new MyLibrary();
// 