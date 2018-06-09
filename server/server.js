const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios').default;

require('dotenv').config({
    path: __dirname + '/../.env',
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/search', (req, res) => {
    // res.send({ message: '' });
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.query.query}`)
        .then(response => {
           res.send(response.data.data)
        })
})

const port = process.env.SERVER_PORT || 3006;

app.listen(port, () => {
    console.log(`Server listening at localhost:${port}`);
});