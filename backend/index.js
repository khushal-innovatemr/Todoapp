const express = require('express');
const bodyParser = require('body-parser');
const router = require('./controllers/routers');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 

const app = express();
const PORT = process.env.PORT||3001

app.use(cors({origin:'https://frontend-delta-six-99.vercel.app/',credentials:true}));  
app.use(bodyParser.json());
app.use(cookieParser());

app.use(function (req, res, next) {
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id'
    );

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});


app.use('/tasks', router);


app.on('error', (err) => {
    console.error(`Error during startup: ${err.message}`);
});

app.listen(PORT, () => {
    console.log(`App has started on port ${PORT}`);
});
