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
 * @param {String} [version] optional, v1/v2/v3/v4
 * 
 * @returns {Boolean}
 */
isuuid(string, [verison])
```

## Exmaple  

```js
const isuuid = require('@zhangfuxing/isuuid');
const str = '002899ea-fa78-44a1-9fbf-4b519ec738d5';

// is uuid
isuuid(str);  // true

// is uuid v1 or v2, v3, v4 ,v5
isuuid(str, 'v1');  // true

```  
