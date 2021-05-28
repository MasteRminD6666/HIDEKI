// let clickState = 0;
// const btn = document.getElementById('btntimeDate');
// btn.addEventListener('click', function(){
//     if (clickState == 0){
//     btn.innerHTML = Date()
//     clickState = 1; 
    
//     }
//     else{
//         btn.innerHTML = 'Click me ' ;
//         clickState = 0;
//     }
  


// });


// let x = function(){

//     console.log('im normal function: ')
    
// };

// let y = function(callback){
//     console.log('do Something ')
//     callback();
// };

// y(x);

// let add = function(a,b){
//     return a + b ;
// }
// let multiply = function(a,b){
//     return a *b;
// }

// let calc = function(num1, num2 , callback){
//     if (typeof callback === "function"){
//         return callback(num1,num2);
//     }
    
// };

// console.log(calc(2,3,add))


// let try1 = function(a,b) {
//     if (a === b){
//         return true;
//     }
//     else{
//         return false;
//     }

    
// }
// console.log(try1(5,'5')) ;



let add= function(nunmber1,number2) {
  return nunmber1+number2;  
};

let multiply= function(nunmber1,number2) {
  return nunmber1*number2;  
};

let sub= function(nunmber1,number2) {
  return nunmber1-number2;  
};

let division= function(nunmber1,number2) {
  return nunmber1 / number2;  
};


let calc= function (num1,num2, callback) {
    if (typeof(callback) == "function"){
        return callback(num1,num2);
    } 
    else{
        console.log("Please Enter a funtion");
    }
};

console.log(calc(2,3));


/*
callback  
promises 
fetch 
async
await */