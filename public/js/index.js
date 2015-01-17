var MyLibrary = function(){
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


// MyLibrary.prototype.addMe = function(){

// };




var gio = new MyLibrary();
// console.log(gio, 'gio');
// console.log(Array.prototype.slice.call(gio.isTag('div')));
// console.log(Array.prototype.slice.call(gio.isClass('some_class')));
// console.log(Array.prototype.slice.call(gio.isId('some_id')));
// console.log(Array.prototype.slice.call(gio.isId('some_other_id')));