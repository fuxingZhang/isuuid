# isuuid
Uuid verification

## Install

```sh
$ npm i @zhangfuxing/isuuid
```  

## Useage  

```  js
/**
 * @param {String} str 
 * @param {Number} [version] optional, 1/2/3/4/5, v1: 1, v2: 2 ...
 * 
 * @returns {Boolean}
 */
isuuid(string[, verison])
```

## Exmaple  

```js
const isuuid = require('@zhangfuxing/isuuid');
const str = '857b3f0a-a777-11e5-bf7f-feff819cdc9f';

// is uuid
isuuid(str);  // true

// is uuid v1
isuuid(str, 1);  // true

// is uuid v2
isuuid(str, 2);  // false

// is uuid v3
isuuid(str, 3);  // false

// is uuid v4
isuuid(str, 4);  // false

// is uuid v5
isuuid(str, 5);  // false
```  
