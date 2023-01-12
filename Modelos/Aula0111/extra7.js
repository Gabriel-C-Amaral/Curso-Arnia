const io = require("../../BaseProjectJS/io")
let num = new Array(10)
io.write("escreva 10 numeros")
for (let index = 0; index < num.length; index++) {
    num[index] = io.readInt()    
}
let double = []
index = 0
let dobro = num.forEach(function(x){
        double[index] = num[index]*2
        index++    
})
io.write(double)