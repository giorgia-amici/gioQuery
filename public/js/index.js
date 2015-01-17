var MyLibrary = function(){
    this.myEle
    this.newEle = [];
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

MyLibrary.prototype.addMe = function(string, selector){
    this.createCustomElement(string)
    this.myEle.innerHTML = '';
    this.fetchElementFromDOM(selector).push(this.myEle)
};




var gio = new MyLibrary();
// 