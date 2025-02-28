const express = require('express');
const bodyParser = require('body-parser');
const router = require('./controllers/routers');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 

const app = express();
const PORT = process.env.PORT||3001

app.use(cors({
    origin: 'https://frontend-delta-six-99.vercel.app',
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id',
    credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());


app.use('/tasks', router);


app.on('error', (err) => {
    console.error(`Error during startup: ${err.message}`);
});

app.listen(PORT, () => {
    console.log(`App has started on port ${PORT}`);
});
