// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name : "Monica",
    gender : "Female",
    age : 17,
    email : "Monica@dingdong.com",
    favouriteColor : ["Yellow","Purple","Pink","White"],
    isHavePet : true,
    education : [{
        name : "SD 01",
        city : "Jakarta",
        graduate : 2016
    },{
        name : "SMP 02",
        city : "Jakarta",
        graduate : 2019
    },{
        name : "SMA 03",
        city : "Tangerang"
    }],
    favoriteRestaurant : ["Bento","Sushi","Pancake","Eggy","Tempura","Padang","Padang"]
};
const secondUser = {
    name : "Wendy",
    gender : "Male",
    age : 23,
    email : "Wendy@Dingdong.com",
    favouriteColor : ["Blue","Black","Grey"],
    isHavePet : false,
    education : [{
        name : "SD 02",
        city : "Jakarta",
        graduate : 2010
    },{
        name : "SMA 01",
        city : "Surabaya",
        graduate : 2016
    },{
        name : "Universitas Maju",
        city : "Tangerang"
    }],
    favoriteRestaurant : ["Bakso","Sushi","Pancake","Eggy","Tempura","Padang","padang","Padan"]
};


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser)
users.push(secondUser)


// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};