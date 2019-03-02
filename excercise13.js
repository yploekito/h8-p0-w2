//For loop
console.log("trying out for loop")
function xo(str) {
    var counterx = 0
    var countero = 0
    for (i=0; i<str.length ; i++){
        if (str[i] === "x"){
            counterx+=1
        } else if(str[i]=== "o"){
            countero += 1
        }
    }
    if (counterx===countero){
        return(true)
    } else {
        return(false)
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true

//While loop
console.log("trying out while loop")
  function ox(str) {
    var counterx = 0
    var countero = 0
    i = 0
    while(i<str.length){
        if (str[i] === "x"){
            counterx+=1
        } else if(str[i]=== "o"){
            countero += 1
        }
        i+=1
    }
    
    if (counterx===countero){
        return(true)
    } else {
        return(false)
    }
  }
  
  console.log(ox('xoxoxo')); // true
  console.log(ox('oxooxo')); // false
  console.log(ox('oxo')); // false
  console.log(ox('xxxooo')); // true
  console.log(ox('xoxooxxo')); // true