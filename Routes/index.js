import express from 'express';
import Section from './section.js';
import noFound from './noFound.js';
import mock from './mock.js';

const router = express.Router();

router.use('/section', Section);

if (process.env.MOCK_ENABLE === "True") {
    router.use('/mock', mock);
}

router.use('*', noFound);

export default router;