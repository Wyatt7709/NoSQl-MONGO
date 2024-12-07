import { Router } from 'express';
import apiRoutes from './API';

const router = Router();

router.use('/api', apiRoutes);

export default router;