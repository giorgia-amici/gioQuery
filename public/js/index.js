var MyLibrary = function(){
    this.elements = [];
};

 MyLibrary.prototype.isTag = function(selector) {
    selector[0] !== '.' && selector[0] !== '#'
    // this.elements = document.getElementsByTagName(selector);
    return true;
};

// MyLibrary.prototype.isClass = function(selector){
//     this.elements = document.getElementsByClassName(selector);
//     return true;
// };

// MyLibrary.prototype.isId = function(selector){
//     this.elements = [document.getElementById(selector)];
//     return true;
// };

// // The following will not save the added elements, because the .add() 
// // method creates a new set and leaves the original set in pdiv unchanged

// MyLibrary.prototype.fetchElementFromDOM = function(selector){
//     // if selector is a tag
//     document.getElementsByTagName(selector);
// };


// MyLibrary.prototype.addMe = function(){

// };




var gio = new MyLibrary();
// console.log(gio, 'gio');
// console.log(Array.prototype.slice.call(gio.isTag('div')));
// console.log(Array.prototype.slice.call(gio.isClass('some_class')));
// console.log(Array.prototype.slice.call(gio.isId('some_id')));
// console.log(Array.prototype.slice.call(gio.isId('some_other_id')));