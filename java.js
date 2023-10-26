alert("1-uy ishi")
let a = +prompt("nechta kvadrat kere")
while (isNaN(a) || a == 0 ) {
    a = +prompt("nechta kvadrat kere")
}
if (a % 2 == 0) {
  a = a + 1
}
box = ""
for (let i = 0; i < a; i++) {
    for (let q = 0; q < a; q++) {
        if (q == i || i == 0 || q == 0 || i == (a - 1) || q == (a - 1) || (i + q) == (a - 1)) {
            box += "⬜️"
        } else {
            box += "⬛️"
        }
    }
    console.log(box);
    box = ""
}
alert("2-uy ishi")
for (let i = 1; i <= 10 ; i++) {     
     let name = prompt("name ", "abduqosim")
    while (!isNaN(name)) {
        name = prompt("ismizzi yozin brat")
    }
    age = +prompt(" yosh "," 20 ")
    console.log(` ползвател ${i}`);
    console.log(" sizzi ismiz " + `${ name }`);
    console.log(" siz " +`${ age }` +" yoshdasiz " );
}