import express from 'express';
import noFoundController from '../Controllers/noFoundController.js';

const router = express.Router();

router.get('/', noFoundController);

export default router;