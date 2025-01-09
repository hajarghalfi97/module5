
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

// const calculatorRoutes =
// require('./routes/calculatorRoutes');


// const express = require('express')
// const app = express()
// const port = 3050

// app.use('/', express.static('public'))
// // app.use('/myexamples', testRoutes);
// app.use('/calculator', calculatorRoutes);

// app.get('/', (req, res) => {
// res.send('Hello World!')
// })

// // app.get('/users', (req, res) => {
// //     res.send('hello friends!')
// //     })

// app.listen(port, () => {
// console.log(`Example app listening at http://localhost:${port}`)})


//slide 39 - dynamic params example

// const userRoutes = require('./routes/userRoutes');
// // map the user routes to our app
// app.use('/users', userRoutes);

// const express = require("express");
// const router = express.Router();
// const users = [
// {id: 1, name: 'Anthony Albanese', country: 'AU'},
// {id: 2, name: 'Joe Biden', country: 'US'},
// {id: 3, name: 'Chris Hipkins', country: 'NZ'},
// {id: 4, name: 'Lee Hsien Loong', country: 'SG'}
// ]
// // Dynamic request param endpoint - get the user matching the specific ID ie. /users/3
// router.get('/:id', (req, res) => {
// console.log(req.params)
// let userId = req.params.id; // 'id' will be a value matching anything after the / in the request path
// let user = users.find(user => user.id == userId)
// user ? res.status(200).json({result: user})
// : res.status(404).json({result:
// `User ${userId} not found`})
// })
// module.exports = router;

// lab4

// const express = require("express"); // import the express package
// const friendRoutes = require('./routes/friendRoutes');

// const app = express(); // create a new app
// const port = 3000; // change this to run the app on a different port - usually a 4 digit number

// // parse requests of content-type - application/json (needed for POST and PUT requests using req.body)
app.use(express.json());
app.use('/', express.static('public'))
app.use('/friends', friendRoutes);



const app = require('./app');
const port = 3000
// start the app to listen on the right port
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})