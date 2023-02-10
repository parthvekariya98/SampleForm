const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send(`
    <form action="/form" method="post">
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="age" placeholder="Age" />
        <input type="submit" value="Submit" />
    </form>
    `);
});

app.post('/form', function(req, res) {
    const name = req.body.name;
    const age = req.body.age;

    res.send(`Hello, ${name}. You are ${age} years old.`);

});

const port = 3000;
app.listen(port, () => {
    console.log(`server starts on port ${port}`);
})