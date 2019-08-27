// ==== Logic Challenge - Konversi Menit ====
/*
Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit. 
Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
Contoh, jika menit adalah 63, maka function akan me-return "1:03".
*/

function konversiMenit(num){
    var jam = Math.floor(num / 60)
    var resultJam = jam < 10 ? '0' + jam : jam
    var menit = num % 60
    var resultMenit = menit < 10 ? '0' + menit : menit
    var hasil = resultJam + ':' + resultMenit
    
    return hasil  
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00