# JS-Bin
Javascript Pair Programming Tool Built with React, Web Workers and Express.

### Admin-Page
The Admin Page allows for the creation, deletion of Bins.  From this screen bins can also have passwords set on them that will prompt the users when they navigate to the bin to log in.

### Bin
   #### Web Sockets
  Bin's allow for the execution of code with the results being displayed in the terminal.  The bins use Web Sockets in order    to communicate between other active users in the bin.  Each Bin is setup in it's own room, which means that the sockets only connect users that are in the same bin.  
  #### Web Worker
  Additionally the "Run Code" runs a Web Worker with the current code in the Code Editor packaged inside of it.  All console.log's inside of this are intercepted and sent back to the bin to be displayed in the terminal.
  
--------------

### Building
  ##### Admin Page
    npm run build:admin
   This will build the Admin react code into the 'build/admin' folder.
   
  ##### Bin Page
    npm run build:bin
   This will build the Bin react code into the 'build/react' folder.
   
  ##### Login Page
    npm run build:login
   This will build the Login react code into the 'build/login' folder.

-----------------

### Server Start
    npm start
   Start's the server at http://localhost:3000
   
------------------
   
### Using the Code
  Build all of the files, and then start the server.  From here naviagte to http://localhost:3000/admin this page will allow for the creation of Bin.  Once a bin has been created it can be opened by pressing the open button or by navigating to http://localhost:3000/{BINNAME}
