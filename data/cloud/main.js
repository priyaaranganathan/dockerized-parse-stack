// Uncomment to get IDE help
//const Parse = require('parse/node');

// cloud function example
Parse.Cloud.define("sayHelloWorld", function(request, response) {
    return "Hello world!";
});

// after save on _User class example
Parse.Cloud.afterSave(Parse.User, (request) => {
    // code here
    //var user = request.user;
    var user = request.object.id
    console.log('*** log user ***', user);
})