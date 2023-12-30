//just copied from stackoverflow 😀
numlist=[];
  colors = ["red"];
     for(let i=0;i<100;i++){
       numlist.push(i+'%');
     }
     numlist.push('NASA hacked!');
 var id = document.getElementById('great') ;
 var load = document.querySelector('.load');
function ArrayPlusDelay(array, delegate, delay) {
  var i = 0;
 
   // seed first call and store interval (to clear later)
  var interval = setInterval(function() {
    	// each loop, call passed in function
      delegate(array[i]);
      
        // increment, and if we're past array, clear interval
      if (i++ >= array.length - 1)
          clearInterval(interval);
  }, delay);
  
  return interval
}
 
var inter = ArrayPlusDelay(numlist, function(obj) {id.innerHTML=obj},80);

var great = ArrayPlusDelay(colors, function(obj) {load.style.background=obj},8300);

var loadbg = ArrayPlusDelay(colors, function(obj) {document.body.style.background=obj},7500);

     
