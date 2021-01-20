(function myfn(){
  var a = 1;
  var b = 2;
  var c = Math.random() * 100;
  c = Math.floor(c);
  var d = ["a","b","c","d","e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var e = Math.floor(Math.random() * 6);
  //alert('Welcome back ' + d[e] + c);
  document.getElementById('username').innerHTML=d[e]+c;
})()
