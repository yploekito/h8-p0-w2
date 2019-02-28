var nama = "Jo"
var peran = "Ksatria"


if(nama === ""){
    console.log("Nama harus diisi!")}
else if(peran === "") {
    console.log("Halo", nama, "Pilih peranmu untuk memulai game!")}
else if(peran === "Ksatria"){
    console.log("Halo Ksatria", nama, ", kamu dapat menyerang dengan senjatamu!")}
else if(peran === "Tabib"){
    console.log("Halo Tabib", nama, ", kamu akan membantu temanmu yang terluka")
} else if (peran === "Penyihir"){
    console.log("Halo Penyihir", nama,", keajaiban yang membantu kemenanganmu!")
} else{
    console.log("Halo", nama, ", pilih salah satu dari antara Ksatria, Tabib, atau Penyihir sebagai peranmu!")
}
