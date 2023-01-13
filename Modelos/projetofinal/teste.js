let arr = [{"taskNum":"01","description":"01","taskDate":"01/01/2001","taskStatus":"Concluído"},
{"taskNum":"01","description":"01","taskDate":"01/01/2001","taskStatus":"Concluído"},
{"taskNum":"01","description":"01","taskDate":"01/01/2001","taskStatus":"Concluído"},{"taskNum":"01","description":"01","taskDate":"01/01/2001","taskStatus":"Concluído"},
{"taskNum":"01","description":"01","taskDate":"01/01/2001","taskStatus":"Concluído"}];
let str = arr.map(JSON.stringify).join(",");
console.log(str); // Output: {"taskNum":"01","description":"01","taskDate":"01/01/2001","taskStatus":"Concluído"}
