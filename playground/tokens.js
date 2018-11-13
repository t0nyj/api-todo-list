const jwt = require('jsonwebtoken');

let data = {
  id: 3
};

let token = jwt.sign(data, '123abc');
let decoded = jwt.verify(token, '123abc');

console.log(`token: ${token}`);
console.log(`decoded: ${JSON.stringify(decoded, undefined, 2)}`);
