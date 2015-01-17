var MyLibrary = function(){
    this.elements = [];
};

 MyLibrary.prototype.isTag = function(selector) {
    console.log(selector[0])
    if(selector[0] !== '.' && selector[0] !== '#')
    // this.elements = document.getElementsByTagName(selector);
    return true;
};

MyLibrary.prototype.isClass = function(selector){
    if(selector[0] === '.')
    // this.elements = document.getElementsByClassName(selector);
    return true;
};

MyLibrary.prototype.isId = function(selector){
    if(selector[0] === '#')
    // this.elements = [document.getElementById(selector)];
    return true;
};


MyLibrary.prototype.fetchElementFromDOM = function(selector){
// if selector is a tag
    if(this.isTag(selector) === true){
        this.elements = document.getElementsByTagName(selector.slice(1))
        console.log('i am a tag')
    }
// if selector is a class
    if(this.isClass(selector) === true){
        console.log('i am a class')
    }
// if selector is an id
    if(this.isId(selector) === true){
        console.log('i am an id')
    }

};


// MyLibrary.prototype.addMe = function(){

// };




var gio = new MyLibrary();
// console.log(gio, 'gio');
// console.log(Array.prototype.slice.call(gio.isTag('div')));
// console.log(Array.prototype.slice.call(gio.isClass('some_class')));
// console.log(Array.prototype.slice.call(gio.isId('some_id')));
// console.log(Array.prototype.slice.call(gio.isId('some_other_id')));