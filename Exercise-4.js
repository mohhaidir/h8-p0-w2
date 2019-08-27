/*
Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
Disini kamu diminta untuk membuat format tanggal. 
Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. 
Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.
*/

var tanggal = 21
var bulan = 7
var tahun = 1993
var result 

if(tanggal < 1 || tanggal > 31){
    console.log('Tanggal yang anda masukkan salah')
} else if (bulan < 1 || bulan > 12) {
    console.log('Bulan yang anda masukkan salah')
} else if (tahun < 1900 || tahun > 2050) {
    console.log('Tahun yang anda masukkan salah')
} else {
    switch(bulan) {
    case 1: {result = "januari"} break;
    case 2: {result = "februari"} break;
    case 3: {result = "maret"} break;
    case 4: {result = "april" } break;
    case 5: {result = "mei"} break;
    case 6: {result = "juni"} break;
    case 7: {result = "juli"} break;
    case 8: {result = "agustus"} break;
    case 9: {result = "september"} break;
    case 10: {result = "oktober"} break;
    case 11: {result = "november"} break;
    case 12: {result = "desember"} break;
    default:
  }
  console.log(tanggal + ' ' +result+ ' ' +tahun)
}
