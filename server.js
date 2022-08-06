//dependencies

const PORT = process.env.PORT || 3001;
const express = require("express");
const app = express();

const fs = required('fs');
const path = required('path');

// requiring Express and creating a new instance of Router on it
// holding that in a variable called routes
// then creating a route at the root path of this Router that sends back a simple message
// then export the Router
const apiRoutes = required('./routes/apiRoutes');
const htmlRoutes = required('./routes/htmlRoutes'); 

// urlencoded() function = a built-in middleware function in Express
app.use(express.urlencoded({
    extended: true
}));

// static files - specifies the root directory from which to serve static assets
// adds a middleware - to serve static files such as images, CSS files, and JavaScript files
app.use(express.static('public'));
app.use(express.json());

// bringing in Express and our routes
// connecting our routes to the application using .use
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// app.listen() function is used to bind and listen to the connections on the specified host and port
// app.listen() = an asynchronous operation
app.listen(PORT, () => {
    //debugging
    console.log(`API server now on port ${PORT}. Welcome!`);
});