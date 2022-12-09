// Membuat Object
// Sebenarnya kita sudah belajar tipe data object, dengan cara membuat variable dengan tipe data object
// Namun pembuatan object menggunakan tipe data object, akan membuat object yang selalu unik, sedangkan dalam OOP, biasanya kita akan membuat class sebagai cetakan, sehingga bisa membuat object dengan karakteristik yang sama berkali, kali, tanpa harus mendeklarasikan object berkali - kali seperti menggunakan tipe data object

//  Membuat Object dengan Object
// const icha = {
//     firstName: "veronica",
//     lastName: "wijaya"
// };

// const alex = {
//     firsName: "alexsander",
//     lastName: "hendra"
// }

// Membuat Constructor Function
// Sebelum EcmaScript versi 6, pembuatan class, biasanya menggunakan function.Hal ini dikarenakan sebenarnya JavaScript bukanlah bahasa pemrograman yang fokus ke OOP
// Untuk membuat class di JavaScript lama, kita bisa membuat function
// Function ini kita sebut dengan Constructor Function

function PremiumMember() { // nama function menggunakan huruf besar
    
}
function Person(){

}

// Membuat Object dari Constructor Function
// Setelah kita membuat class, jika kita ingin membuat object dari class tersebut, kita bisa menggunakan kata kunci new, lalu diikuti dengan nama constructor function nya 

function Orang(){

}

const maya = new Orang();
const thata = new Orang();