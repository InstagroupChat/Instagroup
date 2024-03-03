function sendMsgUser(username, password, message, serverid) {
  // This sends the message to apps script aka the server and stuff to be authenticated
  window.open("https://script.google.com/macros/s/AKfycbykiQ1PtXCQcbyplnSwvgMY73PZ4vYwSYQdzHh_UP9AIGScaLI7ayAlqxxVGUoDCRWx/exec?username="+username+"&password="+password+"&message="+message+"&serverid="+serverid, "sending...")
}
