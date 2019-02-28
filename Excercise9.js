// Tugas 1

console.log("Tugas: 1.")
function shoutOut(){
    return("Halo Function!")
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console

console.log("\n##################")
console.log("Tugas: 2.")
function calculateMultiply(angka1,angka2){
    var hasil=angka1*angka2
    return hasil
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30
console.log("\n##################")

// Tugas 3
console.log("Tugas: 3.")

function processSentence(inputname, inputage, inputaddress, inputhobby){
    return ("Nama saya " + inputname + ", umur saya " + inputage +" tahun, alamat saya di " + inputaddress +", dan saya punya hobby yaitu " + inputhobby)
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);