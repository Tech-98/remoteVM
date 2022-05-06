const { application } = require('express');
const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());


const util = require('util');
const exec = util.promisify(require('child_process').exec);


app.get("/ls", function (req, res) {
    exec('ls').then(result => {
        // do some processing of result into finalData
        let data = result
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.sendStatus(501);
    });
});

app.get("/cowsay", function (req, res) {
    exec('cowsay Hi my name is Saif').then(result => {
        // do some processing of result into finalData
        let data = result
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.sendStatus(501);
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`))
