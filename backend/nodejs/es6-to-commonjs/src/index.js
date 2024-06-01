import express from 'express';

const app = express();

app.get('/', (req,res)=> res.send('hello express'))

app.listen(3000);

console.log('http://localhost:3000/');