const express = require("express")
const app = express();
const port = 3000

function Sum(n){
        let ans = 0 
    for (i = 0 ; i <=n ; i++){
        ans = ans +i;
    }
    return ans;
}

app.get("/" , (req,res)=>{
    
    const n = req.query.n
    const ans =  Sum(n);
    res.send( "the sum of the number is " + ans.toString());

})

app.listen(port)


