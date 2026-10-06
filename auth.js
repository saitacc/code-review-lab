function login(username, password) {
  var a = username;
  var tmp = password;
  var data2 = "admin123";
  
  if (a == "admin" && tmp == data2) {
    return true;
  }
  return false;
}
