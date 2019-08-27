// ==== 1. Melakukan Looping Menggunakan While ====

/*
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. 
Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
*/

// Loop While Pertama

var i = 0
console.log('Looping Pertama')

while( i <= 20) {
    if (i%2 == 0){
        console.log(i+' I LOve Coding')
    }
    i++
}

// Loop While Kedua
var i = 20
console.log('Looping Kedua')

while(i >= 0){
    if(i%2 == 0){
        console.log(i + ' I Will Become Fullstack Developer')
    }
    i--
}

/* ==============================================================================================================*/

// ==== 2. Melakukan Looping Menggunakan For ====

/*
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. 
Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
*/

// Loop For Pertama
console.log('Looping Pertama')
for (var i = 0; i <= 20; i++){
    console.log(i + ' I Love Coding')
}

// Loop For Kedua
console.log('Looping Kedua')
for (var i = 20; i >= 0; i--){
    console.log(i + ' I Will Become Fullstack Developer')
}

/* ==============================================================================================================*/

// ==== 3. Angka Ganjil dan Genap ====

/*
1. Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
2. Di dalam perulangan, periksa setiap angka counter:
    -Apabila angka counter adalah angka genap, tuliskan GENAP
    -Apabila angka counter adalah angka ganjil, tuliskan GANJIL
3. Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
4. Pada 3 perulangan baru ini periksa setiap angka counter:
    -Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
    -Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, 
     dan kelipatan 10 dengan pertambahan 9, tuliskan:
    -"3 kelipatan 3" dan seterusnya.
*/

// 1. Perulangan Counter 1

for (var i = 0; i <= 100; i++){
    console.log(i)
}

// 2. Perulangan Counter Ganjil dan Genap

for(var i = 1; i <= 100; i++) {
    console.log(i)
    
    if(i%2 == 0){
        console.log('=>' + ' genap')
    } else if (i%2 == 1){
        console.log('===>' + ' ganjil')
    }
}

// 3. Perulangan Counter 2, 5 dan 9
// -Counter 2-

for(var i = 0; i <= 100; i++) {
    if (i%2 == 0){
        console.log(i)
    }
}

// -Counter 5-

for(var i = 0; i <= 100; i++){
    if (i%5 == 0)
        console.log(i)
}

// -Counter 9-

for(var i = 0; i <= 100; i++){
    if (i%9 == 0){
        console.log(i)
    }
}

// 4. Perulangan Baru Dengan 2 Kelipatan 3, 5 Kelipatan 6, 9 kelipatan 10
// -2 Kelipatan 3-
for(var i = 0; i <= 100; i+=3) {
    if (i%2 == 0){
        console.log(i + ' Kelipatan 3')
    }
}

// -Kelipatan 6-

for(var i = 0; i <= 100; i+=6){
    if (i%5 == 0)
        console.log(i + ' Kelipatan 6')
}

// -9 Kelipatan 10-

for(var i = 0; i <= 100; i+=10){
    if (i%9 == 0){
        console.log(i + ' Kelipatan 10')
    }
}