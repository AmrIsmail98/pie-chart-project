const express = require('express');
const fs = require('fs');
const cors = require('cors'); // Import CORS
const app = express();
const PORT = 5001;

// Enable CORS
app.use(cors()); // This allows requests from any origin

app.use(express.json());

app.get('/data', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading data file' });
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
