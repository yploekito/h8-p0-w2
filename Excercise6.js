//1. Melakukan Looping Menggunakan While
console.log("Problem: 1. Melakukan Looping Menggunakan While")
var i = 0

console.log("LOOPING PERTAMA")
while (i<10){
    i += 1
    console.log(i*2 +" - I love coding")
}

console.log("LOOPING KEDUA")
while (i>=0){
    console.log(i*2 +" - I will become fullstack developer")
    i -=1
}
console.log("#################")

//2. Melakukan Looping Menggunakan For
console.log("Problem: 2. Melakukan Looping Menggunakan For")
console.log("LOOPING PERTAMA")
for(i = 0; i < 20;i++){
    console.log((i+1) + " - I love coding")
}
console.log("LOOPING KEDUA")
for(i = 20; i > 0; i--){
    console.log(i + " - I will become fullstack developer")
}
console.log("#################")

//3. Angka Ganjil dan Genap
console.log("Problem: 3. Angka Ganjil dan Genap")

//3.1.
var counter = 0
console.log("\n1. ganjil genap")
while(counter <100){
    counter += 1
    if(counter%2 === 0){
        console.log("counter sekarang = " + counter + " output GENAP")
    }else{
        console.log("counter sekarang = " + counter + " output GANJIL" )
    }
}

//3.2.a
counter =1
console.log("\n2.a. kelipatan 3")
while(counter<=100){
    if(counter%3 === 0){
        console.log(counter + " KELIPATAN 3")
    }counter +=2
}

//3.2.b
counter = 1
console.log("\n2.b. kelipatan 6")
while(counter<=100){
    if(counter%6 === 0){
        console.log(counter + " KELIPATAN 6")
    }counter += 5
}

//3.2.c
counter= 1
console.log("\n2.c. kelipatan10")
while(counter<=100){
    if(counter%10 === 0){
        console.log(counter + " KELIPATAN 10")
    }counter +=9
}