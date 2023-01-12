const io = require("../../BaseProjectJS/io")
let a = [1,4,6,90,543,3]
let aux = 0
for (let index = 0; index < 5; index++) {
    for (let k = 0; k < 5; k++) {      
    if (a[k]>a[k+1]) {
        aux = a[k+1]
        a[k+1] = a[k]
        a[k] = aux
    }  
} 
}
console.log(a)