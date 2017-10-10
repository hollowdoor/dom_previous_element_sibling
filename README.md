dom-previous-element-sibling
===========

Install
-----

`npm install --save dom-previous-element-sibling`

Usage
---

```javascript
import previousElementSibling from 'dom-previous-element-sibling';

let element = document.querySelector('ol').children[1];
console.log(element.innerHTML);//Second
let first = previousElementSibling(element);
console.log(first.innerHTML);//First
```

About
----

IE before IE9 doesn't support `element.previousElementSibling`. This module is a ponyfill for that.

Also see [dom-next-element-sibling](https://github.com/hollowdoor/dom_next_element_sibling).
