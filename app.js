/* const isLoggedIn = true;
const role = "admin";
if(isLoggedIn === true){
    if(role === "admin") {
        console.log("remove post");
    } else{
        console.log ("need mod privs")
    }
}
 */

function classifyNumber(x){
    if (x === 0) console.log("Zero");
   else if ((x > 0) && (x % 2 === 0)) console.log("positive even");
   else if ((x > 0) && (x % 2 !== 0)) console.log("positive odd");
   else if ((x < 0) && (x % 2 === 0)) console.log("negative even");
   else if ((x < 0) && (x % 2 !== 0)) console.log("negative odd");

}

classifyNumber(-1);
