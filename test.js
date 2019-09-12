const isuuid = require('./index');
const str = '857b3f0a-a777-11e5-bf7f-feff819cdc9f';

// is uuid
console.log(isuuid(str));  // true

// is uuid v1 or v2, v3, v4 ,v5
console.log(isuuid(str, 'v1'));  // true