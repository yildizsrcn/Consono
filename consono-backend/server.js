// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

let testResults = [];

app.post('/api/results', (req, res) => {
    const result = req.body;
    testResults.push(result);
    res.status(201).json({ message: 'Result saved successfully' });
});

app.get('/api/results', (req, res) => {
    res.json(testResults);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});