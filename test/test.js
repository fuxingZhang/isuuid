const isuuid = require('../index');
const str = '857b3f0a-a777-11e5-bf7f-feff819cdc9f';

// is uuid
console.log(isuuid(str));  // true

// is uuid v1
console.log(isuuid(str, 1));  // true

// is uuid v2
console.log(isuuid(str, 2));  // false

// is uuid v3
console.log(isuuid(str, 3));  // false

// is uuid v4
console.log(isuuid(str, 4));  // false

// is uuid v5
console.log(isuuid(str, 5));  // false