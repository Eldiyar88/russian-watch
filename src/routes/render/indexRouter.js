import express from 'express';
import { Watch } from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const watches = await Watch.findAll({ order: [['updatedAt', 'DESC']] });
  const initState = { watches };
  res.render('IndexPage', initState);
});

export default router;
