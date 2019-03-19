import express from 'express';
import compression from 'compression'; // compresses requests
import bodyParser from 'body-parser';
import lusca from 'lusca';
import dotenv from 'dotenv';
import morgan from 'morgan';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config();

// Controllers (route handlers)
import * as exampleController from './controllers/example';
import * as loginController from "./controllers/login";
import * as registerController from "./controllers/register";
import * as logoutController from "./controllers/logout";
import * as suggestionController from "./controllers/suggestion";
import * as createUser from './controllers/createUser';

// Create Express server
const app = express();
const router = express.Router();

// Express configuration
app.set('port', process.env.PORT || 3000);

app.use(compression());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(expressValidator());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use(morgan('short'));

/**
 * Primary app routes.
 */

router.get('/', (req, res) => {
  res.sendStatus(200);
});
router.get('/example', exampleController.exampleFunction);
router.post('/login', loginController.loginFunction);
router.post('/register', registerController.registerFunction);
router.post('/logout', logoutController.logoutFunction);
router.post('/suggestion', suggestionController.suggestionFunction);
router.post('/createUser', createUser.createUser);

app.use('/', router);

export default app;

