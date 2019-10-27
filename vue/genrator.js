const fs =require ("fs");
function * read(){
    let concent = yield fs.readFile("./goood.txt","utf-8")
    let age = yield fs.readFile(concent,"utf-8")
    return age 
}
let co = require ("co")//tj写的一个异步流程控制模块 能够
co(read()).then(data=>{
    console.log(data)
})
