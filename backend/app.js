const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = 3001;
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let products = []

app.get('/admin/proizvodi', (req, res) => {
    res.send(JSON.stringify(products));
});

app.post('/admin/unos-novog-proizvoda', (req, res) => {
    let name = req.body.name;
    let description = req.body.description;

    products.push({id: products.length + 1,name: name, description: description});
    res.send(JSON.stringify(products));
});

app.delete('/admin/proizvodi', (req, res) => {
    let id = req.body.id;
    products = products.filter(product => {
        return product.id !== id;
      });

    res.send(JSON.stringify(products));
});


app.listen(port, () => {
    console.log(`App is listening on port:${port}`)
})