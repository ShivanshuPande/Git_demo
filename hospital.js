const { json } = require("body-parser");
const express = require("express");
const app = express();
const port =3000 ;

//in-memory data
//use-case  of databases

const users = [
    {
        name: "Shivanshu",
        kidney :[
            {
                healthy :false 
            } ,                 
            {
                healthy :true
            }
        ]
        
    }
]

app.use(express.json());

app.get("/" , (req, res)=>{
    const username = users[0].name;
    const userkidney = users[0].kidney
    const numberkidneys = userkidney.length
    var healthykidneys = 0 ;
    for (i = 0 ; i < userkidney.length ;i++){
        if (userkidney[i].healthy){
            healthykidneys = healthykidneys + 1;

        }
    }

    var unhealthykidneys = numberkidneys - healthykidneys;

    //filter ahs to be added later
    res.json({
        username,
        numberkidneys,
        healthykidneys,
        unhealthykidneys
    })

    console.log(userkidney);
    console.log(numberkidneys);
})

app.put("/" , (req, res) =>{

    const userkidney = users[0].kidney;
    for(i= 0 ; i < userkidney.length ; i ++){
        users[0].kidney[i].healthy = true
    }

    res.json({
        msg:"All users kidney has been marked as healthy "
    })
})

app.post("/" , (req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({
        healthy:isHealthy
    })

    res.json({
        msg:"added a kidney"
    })

});

app.delete("/" ,(req,res) =>{
    const newKidneys =[];
    const userKidney = users[0].kidney;
    for (i =0 ; i < userKidney.length ; i++){
        if (users[0].kidney[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }

    users[0].kidney= newKidneys
    res.json({
        msg:"deleted the unhealthy kidney"
    })
});


app.listen(port);