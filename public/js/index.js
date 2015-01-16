
   var MyLibrary = function (selector) {

    this.elements = [];

    // if (selector[0] === "#")
    //   elements = [document.getElementById(selector.slice(1))];
    
    // if (selector[0] === ".") 
    //   elements = document.getElementsByClassName(selector.slice(1))
 
    // if (selector[0] !== "#" && selector[0] !== ".")
    //   elements = document.getElementsByTagName(selector)
    
    // var toArray = function(likeArrayObject){
    //     return Array.prototype.slice.call(likeArrayObject)
    // }
   
    // return toArray(elements).forEach(function(ele){
    //   console.log(ele)
    // })
    // return this.elements;
  };

 MyLibrary.prototype.isId = function(selector) {
    this.elements = selector.slice(1);
    // [document.getElementById(
    return this.elements;
  };
