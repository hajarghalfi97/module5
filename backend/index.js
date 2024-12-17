
// example1 11-13
// // console.log('hello world:')


// example2 14-17
// const express = require('express')
// const app = express()
// const port = 3055

// app.get('/', (req, res) => {
// res.send('Hello World!')
// })
// app.get('/test', (req, res) => {
//     res.send('This is a test2')
//     })
// app.listen(port, () => {
// console.log(`Example app listening at http://localhost:${port}`)})


// exercise1 -18- crete a back-end app with multiple web servers running on different ports
// const express = require('express')
// const app1= express()
// const port1 = 3060
// app1.get('/', (req, res) => {
//     res.send('Hello app1!')
//     })

// const app2= express()
// const port2=3061

// app2.get('/', (req, res) => {
//      res.send('Hello app2!')
//      })

// app1.listen(port1,()=>{
//     console.log(`Example app listening at http://localhost:${port1}`)
//     })

//     app2.listen(port2,()=>{
//         console.log(`Example app listening at http://localhost:${port2}`)})

// example3 -24-26


// const testRoutes =
// require('./routes/myTestRoutes');

// const express = require('express')
// const app = express()
// const port = 3050

// app.use('/', express.static('public'))
// app.use('/myexamples', testRoutes);

// app.get('/', (req, res) => {
// res.send('Hello World!')
// })

// app.get('/users', (req, res) => {
//     res.send('hello friends!')
//     })

// app.listen(port, () => {
// console.log(`Example app listening at http://localhost:${port}`)})


//example4 32

const calculatorRoutes =
require('./routes/calculatorRoutes');


const express = require('express')
const app = express()
const port = 3050

app.use('/', express.static('public'))
// app.use('/myexamples', testRoutes);
app.use('/calculator', calculatorRoutes);

app.get('/', (req, res) => {
res.send('Hello World!')
})

// app.get('/users', (req, res) => {
//     res.send('hello friends!')
//     })

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)})

