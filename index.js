// ` Research javascript date class reference page
//  setInterval syntax is as follows:
//  var intervalID = scope.setInterval(func, delay(), param1, param2, etc...
//  BJ Example
//   var time, hr, min, sec;

function logTime() {
   var time = new Date();
   var twelveHr = 0;
   var hr = time.getHours() > 9 ? time.getHours() : '0' + time.getHours();
   var min = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes();
   var sec = time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds();
   if (hr > 12) {
     twelveHr = hr - 12;
   }
   console.log('0' + twelveHr + ':' + min + ':' + sec);
   document.body.style.backgroundColor = 'rgb(' + sec * 1 + ',' + sec * 3 + ',' + sec * 5 + ')';
   document.getElementById('clock-frame').innerHTML = '0' + twelveHr + ':' + min + ':' + sec;

 }
 setInterval(logTime, 1000);

 function smash(words) {
   var arrstring = words.join();
   return arrstring;
 }

// document.body.style.background = 'blue';
