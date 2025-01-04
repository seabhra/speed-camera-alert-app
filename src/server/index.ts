import express from 'express';
import admin from 'firebase-admin';
import { firebaseConfig } from '../config/firebaseConfig';
import serviceAccount from '../config/serviceAccountKey.json';

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Firebase Admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`
});

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Speed Camera Alert App');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
