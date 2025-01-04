const express = require('express');

const app = express();
app.use = express.json();
const port = 8080;
const userModel = require('../src/models/user'); 
const ejs = require('ejs');

app.get('/home', (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.send('<h1>hello world!</h1>');
});

app.get('/user', (req, res) => { 
    app.set('view engine', 'ejs');
    app.set('src/views'); 
    
app.get('views/user.ejs',async(req, res) =>{
    res.render('index'); 
})    
    const users = [
        {
            name: "John Doe", 
            age: "30",
            email: "john@doe.com"
        },
        {
            name: "Jane Doe", 
            age: "25",
            email: "jane@doe.com"
        }
    ];
    res.status(200).json(users); 
});

// Middleware to parse JSON bodies

app.use(express.json());
// Middleware to log request details
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
    console.log(req.body); 
    console.log('request type : $ (req.method)'); 
    console.log(`content type: ${req.headers['content-type']}`);
    console.log (`date: ${new Date()}`);   
});
// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Speed Camera Alert App!');
});
app.get ('/ users:id'), async (req, user) => { 
    try { 
const id = req.params.id; 
const user = await userModel.findById (id); 
return res.status(200).json (user); 

    }
        catch (error) { 
            return res.status(500).send(err.message); 
        }}  
              

app.post('/users', async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).send('User deleted successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});
app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;