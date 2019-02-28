//1. Menyusun Barisan Bintang
console.log("Problem : 1. Menyusun Barisan Bintang")
var rows1 = 5 
i = 0
while (i<rows1){
    console.log("*")
    i +=1
}

console.log("\n###############")
console.log("Problem: 2. Menyusun Barisan Bintang dengan Nested Looping")
var rows2 = 5
i = 0
j = 0
baris = ""
while(i<rows2){
    while(j<rows2){
        baris = baris + "*"
        j +=1
    }
    console.log(baris)
    i+=1
}

console.log("\n###############")
console.log("Porblem: 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping")
console.log("cara 1: Tanpa Nested Looping")
var rows3 = 5
i = 0
baris = ""
while(i<rows3){
    baris = baris +"*"
    console.log(baris)
    i += 1
}
console.log("cara 2: Dengan Nested Looping")
i=0
j=0

while(i<rows3){
    counter = 0
    j+=1
    baris=""
    while (counter < j){
        baris=baris+"*"
        counter +=1
    }
    console.log(baris)
    i+=1
}


