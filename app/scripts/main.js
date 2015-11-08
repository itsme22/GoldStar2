
console.log('\'Allo \'Allo!'); 
	
var GoldStar = new Firebase('https://goldiestar.firebaseio.com/');
   
GoldStar.set({
	name: "Sue"
});

console.log('\'Allo \'Allo!'); 
$( ".newTeacher" ).click(function() {
 alert( "Handler for .click() called." );
});

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
