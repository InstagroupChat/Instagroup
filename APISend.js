function sendMsgUser(username, password, message, serverid) {
  // This sends the message to apps script aka the server and stuff to be authenticated
  window.open("https://script.google.com/macros/s/AKfycbzfQcW-qo5J65GHTpIsEftpiuYM_P-2CiuPaK873gtB7BCS_r3v6NVbhwOvcHnybkg7/exec?username="+username+"&password="+password+"&message="+message+"&serverid="+serverid, "sending...")
}
