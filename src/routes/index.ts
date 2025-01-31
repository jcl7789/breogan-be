import { Router } from 'express';
import UnitsRoutes from './units';
import SalesRoutes from './sales';
import StockRoutes from './stock';
import StatsRoutes from './stats';
import ProfilesRoutes from './profile';
import ScheduleRoutes from './schedule';
import BrandsRoutes from './brands';

const router: Router = Router();

router.use('/units', UnitsRoutes);
router.use('/profile', ProfilesRoutes);
router.use('/sales', SalesRoutes);
router.use('/schedule', ScheduleRoutes);
router.use('/stats', StatsRoutes);
router.use('/stock', StockRoutes);
router.use('/brands', BrandsRoutes);

export default router;
