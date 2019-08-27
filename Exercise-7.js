// Looping Dengan Asterisk
// ==== 1. Menyusun Barisan Bintang ====
/*
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). 
Setiap baris memiliki 1 simbol '*'.
*/

var rows1 = 5
var temp = ''

for(var i = 0; i < rows1; i++){
    temp = '*'
    
    console.log(temp)
}

// ==== 2. Menyusun Barisan Bintang Dengan Nested Looping ====
/*
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). 
Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. 
Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
*/

var rows2 = 5
var temp = ''
for(var i = 0; i < rows2; i++) {
    temp = ''    
    
    for(var j = 0; j < rows2; j++){
        temp += '*'
    }
    console.log(temp)
}

// ==== 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping ====
/*
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. 
Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. 
Baris pertama, hanya ada satu bintang. 
Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. 
Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
*/

var rows3 = 5
var temp = ''

for (var i = 0; i < 1; i++) {
    for (var j = 0; j < rows3; j++) {
        temp += '*'
        console.log(temp)
    }
}