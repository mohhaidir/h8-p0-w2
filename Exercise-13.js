// ==== Logic Challenge - X dan O ====
/*
Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
*/


function xo(str) {
    var x = ''
    var o = ''
    for(var i = 0; i < str.length; i++){
        // console.log(str[i])
        if(str[i] == 'x'){
            x += [i]
        } else if (str[i] == 'o'){
            o += [i]
        }
    }
    if(x.length == o.length){
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true