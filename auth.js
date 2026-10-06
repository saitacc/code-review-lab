function login(username, password) {
  const hashedPassword = hashPassword(password);
  const storedHash = process.env.ADMIN_PASSWORD_HASH;
  
  if (username === "admin" && hashedPassword === storedHash) {
    return true;
  }
  return false;
}
