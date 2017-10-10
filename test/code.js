(function () {
'use strict';

//See https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling
var previousElementSibling = (function (){
    if(!("previousElementSibling" in document.documentElement)){
        return function (element){
            var e = element.previousSibling;
            while(e && 1 !== e.nodeType)
                { e = e.previousSibling; }
            return e;
        };
    }

    return function (element){
        return element.previousElementSibling;
    };
})();

var element = document.querySelector('ol').children[1];
console.log(element.innerHTML);//Second
var first = previousElementSibling(element);
console.log(first.innerHTML);//First

}());
//# sourceMappingURL=code.js.map
