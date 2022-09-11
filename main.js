let num = prompt ("Enter The Number");
let count = 0;

for (let i = 1; i<=num; i++){
    if(num%i==0){
        count++
    }
}
if (count == 2){
    console.log("The number is a prime number");
}    
else {
    console.log ("The number is not a prime number");
}