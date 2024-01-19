import express from 'express';
import { Order } from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const orders = await Order.findAll({ order: [['updatedAt', 'DESC']] });
  const initState = { orders };
  // console.log(orders, '777777777777777777777777');
  res.render('OrdersPage', initState);
});

router.post('/new', async (req, res) => {
  const newOrder = await Order.create(req.body);
  res.json(newOrder);
});

export default router;
