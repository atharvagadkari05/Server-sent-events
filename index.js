const Express = require('express')
const app = Express()

app.get('/', (req,res) => {
    res.send('Working Tree green')
})

app.get('/stream', (req,res)=>{
    res.setHeader('content-type','text/event-stream')
    helper(res);
})

let i=0
function helper(res){
    res.write(`Sending Test data every second : ${i++} `)
    setTimeout(()=>helper(res),1000)
}

app.listen(8080, ()=>{
    console.log('Connected...')
})