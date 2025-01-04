const express = require('express');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Speed Camera Alert App is running!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});