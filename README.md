qs-merge
===

Utility to merge two parts of querystring. Any part can be string of object. The result is string

API:
```
(a: String | Object) => (b: String | Object) => string
```

Example:
```js
import qsMerge from 'qs-merge';
qsMerge({a: `aa`})({b: `bb`});// b=bb&a=aa
qsMerge(`a=x`)(`a=y`);// a=x
qsMerge({a: `aa`})(`b=bb`);// b=bb&a=aa
```
