
// slide 32 example
// const express = require('express');
// const router = express.Router();

// // new route for adding two numbers
// router.get('/add', (req, res) => {
// res.send('Add')
// })
// module.exports = router;


// const express = require('express');
// const router = express.Router();


// router.get('/add', (req, res) => {
//     console.log(req.query)
//     res.send(req.query)
//     })
// module.exports = router;

// slide 34 example 
// const express = require('express');
// const router = express.Router();


// router.get('/add', (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//      let sum = number1 + number2
//     console.log(sum)
//     res.status(200)
//     res.json({result:sum})
//     })



//     router.get('/subtract',(req,res)=>{
//         let number1 = parseInt(req.query.num1)
//         let number2 = parseInt(req.query.num2)
//         let difference = number1 - number2
//         console.log(difference)
//         res.status(200)
//         res.json({result:difference})
//     })

//     router.get('/divide', (req,res) =>{
//         let number1= parseInt(req.query.num1)
//         let number2= parseInt(req.query.num2)
//         let fraction = number1/number2console.log(fraction)
//         res.status(200)
//         res.json({result:fraction})

//         router.get('/multiply',(req,res)=>{
//             let number1 =parseInt(req.query.num1)
//             let number2=pRarseInt(req.query.num2)
//             let mu
//         })
//     })
// module.exports = router;

//slide 47 example
const express = require('express');
const router = express.Router();


router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
     let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
    })



    router.get('/subtract',(req,res)=>{
        let number1 = parseInt(req.query.num1)
        let number2 = parseInt(req.query.num2)
        let difference = number1 - number2
        console.log(difference)
        res.status(200)
        res.json({result:difference})
    })

    router.get('/divide', (req,res) =>{
        let number1= parseInt(req.query.num1)
        let number2= parseInt(req.query.num2)
        let fraction = number1/number2console.log(fraction)
        res.status(200)
        res.json({result:fraction})

        router.get('/multiply',(req,res)=>{
            let number1 =parseInt(req.query.num1)
            let number2=pRarseInt(req.query.num2)
            let mu
        })
    })
module.exports = router;
