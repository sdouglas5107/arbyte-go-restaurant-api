const crypto = require("crypto");

const generateSalt = (size = 16) => {
  return crypto.randomBytes(size).toString("hex");
};

const generatePassword = (size = 6) => {
  return generateSalt(size);
};

const encryptPassword = (password, salt = generateSalt()) => {
  const encryptedPassword = crypto.pbkdf2Sync(
    password,
    salt,
    100000,
    64,
    "sha512"
  );

  return {
    salt,
    encryptedPassword: encryptedPassword.toString("hex"),
  };
};

module.exports = {
  encryptPassword,
  generatePassword,
};
