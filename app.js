const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World from node JS!'));


app.get('/demo', (req, res) => {
    res.set('X-tea-drink', Date.now);
    res.status(418);
    return res.send('i am a teapot');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

