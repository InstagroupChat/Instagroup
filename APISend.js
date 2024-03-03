function sendMsgUser(username, password, message, serverid) {
  // This sends the message to apps script aka the server and stuff to be authenticated
  window.open("https://script.google.com/macros/s/AKfycbysTK_NelS1Kb5N0K0J0dW9PKKneItI0WUe0yzzZExLAKjvmaj1mRWWlqaD214zRRH6/exec?username="+username+"&password="+password+"&message="+message+"&serverid="+serverid, "sending...")
}
