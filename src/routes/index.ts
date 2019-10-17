import { Router } from 'express';
import UnitsRoutes from './units';
import SalesRoutes from './sales';
import StockRoutes from './stock';
import StatsRoutes from './stats';
import ProfilesRoutes from './profile';
import ScheduleRoutes from './schedule';
import BrandsRoutes from './brands';
import MerchTypesRoutes from './merchTypes';
import UsersRoutes from './users';

const router: Router = Router();

router.use('/units', UnitsRoutes);
router.use('/profile', ProfilesRoutes);
router.use('/sales', SalesRoutes);
router.use('/schedule', ScheduleRoutes);
router.use('/stats', StatsRoutes);
router.use('/products', StockRoutes);
router.use('/brands', BrandsRoutes);
router.use('/merchsTypes', MerchTypesRoutes);
router.use('/users', UsersRoutes);

export default router;
