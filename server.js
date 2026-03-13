//port config

const port = 3001;

//express config

const exp = require("express");

//config the server application

const batch= 24.1;
const name = "Oneli";

const app = exp();

app.listen(port, () => {
  console.log(`Server started at port : ${port}, \nName: ${name} \nBatch: ${batch}`);
});

app.use(exp.json());
 
//get
app.get('/', (req,res)=>{
    res.json({name, batch})
})

