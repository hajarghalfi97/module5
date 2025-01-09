const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
    }
    module.exports = {
    addNumbers
    }
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
