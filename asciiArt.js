/* Name: Reece Morgan
/* Date: 4/14/23
/* Assignment 1
*/

//process.argv returns an array containing the command-line arguments passed when the node.js process was launched
// argv.forEach((val, index) => {
// 	console.log('${index}: ${val}');
// });


var figlet = require("figlet");

figlet(process.argv[2], function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data)
    });

