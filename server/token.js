const crypto = require('crypto');


const generateRandomSecret = (length) => {
  return crypto.randomBytes(length).toString('hex');
};


const secretToken = generateRandomSecret(32);

console.log('Generated Secret Token:', secretToken);
