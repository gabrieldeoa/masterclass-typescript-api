import express from 'express';

const PORT = 3333;

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello World');
})

app.listen(PORT);