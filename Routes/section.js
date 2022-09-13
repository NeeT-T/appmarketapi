import express from 'express';

const router = express.Router();

router.get('/', () => console.log('section'));

export default router;