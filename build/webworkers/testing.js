console.log = function(string) {postMessage(string + '\n');} 
 try { 
for(let i = 0; i < 10; i++) {
   console.log(i);
}
 } catch (err) { postMessage(err); }