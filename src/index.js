//See https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling
const previousElementSibling = (()=>{
    if(!("previousElementSibling" in document.documentElement)){
        return element=>{
            var e = element.previousSibling;
            while(e && 1 !== e.nodeType)
                e = e.previousSibling;
            return e;
        };
    }

    return element=>{
        return element.previousElementSibling;
    };
})();

export default previousElementSibling;
