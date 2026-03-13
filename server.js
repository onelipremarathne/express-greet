//port config
const port = 3001;

//express config
const exp = require("express");

//config the server application
const batch = 24.1;
const name = "Oneli";

const app = exp();

app.listen(port, () => {
  console.log(
    `Server started at port : ${port}, \nName: ${name} \nBatch: ${batch}`,
  );
});

//get
app.get("/", (req, res) => {
  res.json({ name, batch });
});

/////////////
app.use(exp.json());
app.use(exp.static("public"));
app.use(exp.urlencoded({ extended: true }));

let userName = "";

app.post("/greet", (req, res) => {
  userName = req.body.name;
  res.redirect(`/greet`);
});
app.get("/greet", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Greeting</title>
</head>

<body
    style="background-color: palevioletred; display: flex; align-items: center; justify-content: center;margin: 0; padding: 0;min-height: 100vh;">
    <div
        style="background: rgba(255, 255, 255, 0.15); border: 2px solid red; border-radius: 12px; padding: 2em; max-width: 400px; width: 100%; text-align: center; ">
        <div>
            <h1 style="color: aliceblue; font-size: 2rem;">Hello, ${userName}!</h1>
        </div>

    </div>
</body>

</html>`);
});