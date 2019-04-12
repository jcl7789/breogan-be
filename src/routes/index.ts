import { Router, Request, Response } from 'express';
import UnitsRoutes from './units';
import SalesRoutes from './sales';
import StockRoutes from './stock';
import StatsRoutes from './stats';
import ProfilesRoutes from './profile';
import ScheduleRoutes from './schedule';

const router: Router = Router();

router.use('/units', UnitsRoutes);
router.use('/profile', ProfilesRoutes);
router.use('/sales', SalesRoutes);
router.use('/schedule', ScheduleRoutes);
router.use('/stats', StatsRoutes);
router.use('/stock', StockRoutes);

export default router;
