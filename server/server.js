const express = require('express');
//const moment = require('moment');

/** Validation library */ 
const { check, validationResult } = require('express-validator'); 
/** Logging middleware */
const morgan = require('morgan'); 

/** Create application */ 
const PORT = 3001;
app = new express();

/** Set-up logging */ 
app.use(morgan('tiny'));

/** Process body content */ 
app.use(express.json());

/** DB error */ 
const dbErrorObj = { errors: [{ 'param': 'Server', 'msg': 'Database error' }] };

app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}/`));