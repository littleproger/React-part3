const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/index');
routes(app);


const port = 3050;
app.listen(port, () => {console.log("server starting on port",port)});

exports.app = app;