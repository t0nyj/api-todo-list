const bcrypt = require('bcryptjs');

let password = 'tony123';

let hashedPw = '$2a$10$mY1tQ16x6G7pM7WVR8XA2evEw4NAGwdmfR3GI7C.aq9EhAqfZHmWu';
bcrypt.genSalt(10, (err, salt) => {
  return bcrypt.hash(password, salt, (e, hash) => {
    console.log(hash);
    //return hash;
  });
});
bcrypt.compare(password, hashedPw, (err, res) => {
  console.log(res);
});
