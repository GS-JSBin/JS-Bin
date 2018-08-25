console.log = function(string) {postMessage(string + '\n');} 
 try { 
console.log('test');
 } catch (err) { postMessage(err); }