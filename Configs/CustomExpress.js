import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import health from '@cloudnative/health-connect';
import routes from '../Routes/index.js';

const CustomExpress = express();
const healthcheck = new health.HealthChecker();

CustomExpress.use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    .use(cors())
    .use(helmet())
    .use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
});

CustomExpress.use('/', routes);

CustomExpress.use('/liveness', health.LivenessEndpoint(healthcheck));

CustomExpress.use('/readiness', health.ReadinessEndpoint(healthcheck));

export default CustomExpress;