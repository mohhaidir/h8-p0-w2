/*
Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu namadan peran. 
Variabel peranharus memiliki isi data, bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
Terdapat 3 peranberbeda yaitu Ksatria, Tabib, dan Penyihir. 
Tugas Anda adalah untuk membuat program yang mengecek isi variabel peranserta mengeluarkan respon sesuai isi variabel tersebut.
*/


var nama = 'Haidir'
var peran = 'Ksatria'


if (nama == '') {
  console.log('Nama harus diisi!')
} else if (peran == ''){
  console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!') 
} else if (peran == 'Ksatria') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama)
  console.log('Halo Ksatria ' + nama  + ', kamu dapat menyerang dengan senjatamu!')
} else if (peran == 'Tabib') {
  console.log('Selamat datang di Dunia Proxytia,' + nama)
  console.log('Halo Tabib ' + nama  + ', kamu akan membantu temanmu yang terluka')
} else if (peran == 'Penyihir') {
  console.log('Selamat datang di Dunia Proxytia, '+ nama)
  console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
}