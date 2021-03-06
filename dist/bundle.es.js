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

export default previousElementSibling;
//# sourceMappingURL=bundle.es.js.map
