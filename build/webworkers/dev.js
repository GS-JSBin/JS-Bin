console.log = function(string) {postMessage(string + '\n');} 
 try { 
function test () {
  console.log('testing');
}

test();
 } catch (err) { postMessage(err); }