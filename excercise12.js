function konversiMenit(menit) {
    var jam = Math.floor(menit/60)
    //console.log(jam = Math.floor(menit/60))
    var outmenit = menit%60
    //console.log(menit%60)
    //console.log(outmenit < 10)
    if (outmenit < 10){
        return (jam +":0"+outmenit)
    } else{
        return (jam+":"+outmenit)
    }
  }
  

  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00