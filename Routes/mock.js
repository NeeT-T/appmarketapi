import express from 'express';
import mock from '../Controllers/mockController.js';

const router = express.Router();

router.get('/products', mock.getProducts);
router.get('/markets', mock.getMarkets)


export default router;