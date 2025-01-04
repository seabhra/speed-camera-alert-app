const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const { sendEmail } = require('./http');

const http = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API base URL
    timeout: 10000, // Request timeout in milliseconds
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to handle GET requests
const get = async (url, params = {}) => {
    try {
        const response = await http.get(url, { params });
        return response.data;
    const app = express();
    const port = 3000;

    app.use(bodyParser.json());

    app.post('/send-email', async (req, res) => {
        const emailData = req.body;
        try {
            const response = await sendEmail(emailData);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send('Failed to send email');
        }
    });

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
    } catch (error) {
        console.error('GET request failed:', error);
        throw error;
    }
};

// Function to handle POST requests
const post = async (url, data) => {
    try {
        const response = await http.post(url, data);
        return response.data;
    } catch (error) {
        console.error('POST request failed:', error);
        throw error;
    }
};

// Function to handle PUT requests
const put = async (url, data) => {
    try {
        const response = await http.put(url, data);
        return response.data;
    } catch (error) {
        console.error('PUT request failed:', error);
        throw error;
    }
};

// Function to handle DELETE requests
const del = async (url) => {
    try {
        const response = await http.delete(url);
        return response.data;
    } catch (error) {
        console.error('DELETE request failed:', error);
        throw error;
    }
};

module.exports = {
    get,
    sendEmail,
    post,
    put,
    del,
};
// Function to handle sending emails
const sendEmail = async (emailData) => {
    try {
        const response = await http.post('/send-email', emailData);
        return response.data;
    } catch (error) {
        console.error('Send email request failed:', error);
        throw error;
    }
};

// Function to handle receiving emails
const getEmails = async (params = {}) => {
    try {
        const response = await http.get('/emails', { params });
        return response.data;
    } catch (error) {
        console.error('Get emails request failed:', error);
        throw error;
    }
};

module.exports = {
    get,
    post,
    put,
    del,
    sendEmail,
    getEmails,
};