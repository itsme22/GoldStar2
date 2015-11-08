// require.config({
//    baseUrl: 'scripts',
//    paths: {
//        'jquery': '../bower_components/jquery/jquery',
//    },
//    shim: {
//        'jquery': {
//            deps: [],
//            exports: '$'
//        }
//    }
// });

//require(['jquery'], function($){
   // now you can do what you always done with $
   // $('body').remove();
   // define(function(require) {
	console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
	//var Firebase = require("firebase");
	var GoldStar = new Firebase('https://goldiestar.firebaseio.com/');
   // now you have the Zombie variable available in this context
   // var zombie = new Zombie();
   GoldStar.set({
	name: "Sue"
});
console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
 // });
//});

$( ".newTeacher" ).click(function() {
 alert( "Handler for .click() called." );
});
// var newUser = function(){
// 	create 
// };
GoldStar.createUser({
  email    : "magdalener.mcarthur@gmail.com",
  password : "rose10"
}, function(error, userData) {
  if (error) {
    console.log("Error creating user:", error);
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
  }
});
