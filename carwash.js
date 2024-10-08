const { json } = require("body-parser");
const express = require("express");
const app = express();
const port = 3001;

const user = [
    {
        name:"Shivanshu",
    
        carCondition :[
            {washed : true},
            {washed : true}

        ]
    }
]


app.use(express.json());

app.get("/", (req,res)=>{
    const conditionOfCars = user[0].carCondition;
    const numberofCars = conditionOfCars.length;

    var washedCars = 0;

    for (i = 0; i < numberofCars ; i++){
        if (conditionOfCars[i].washed) {
            washedCars += 1;
        }
    }
     var unWashedCars = numberofCars - washedCars;

    res.json(

        {washedCars,
            unWashedCars}
    )
    console.log(
        numberofCars,
        conditionOfCars)
})



app.post("/" , (req,res)=>{
    const isWashed = req.body.isWashed;

    user[0].carCondition.push({
        washed:isWashed
    })

    user.json({
        msg:  "Data is Updated"
    })

})
app.listen(port);