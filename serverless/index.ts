/* const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

const login = require('./controllers/login');

app.use(cors({origin:true}));
//app.use(login);

app.get('/example', (req, res) => res.send("Hello"))
app.get('/login', login.loginFunction);

exports.widgets = functions.https.onRequest(app); */

import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import app from './app';

admin.initializeApp(functions.config().firebase);
export const widgets = functions.https.onRequest(app);

