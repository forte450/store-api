const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const products_routes = require('./routes/products');
//Middleware
app.use("/api/products", products_routes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};

start();    
