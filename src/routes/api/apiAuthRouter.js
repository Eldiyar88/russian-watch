import { Router } from 'express';
import { User } from '../../../db/models';

const router = Router();

router.post('/login', async (req, res) => {
  const { inputUserName, inputPassword } = req.body;

  if (!(inputUserName && inputPassword)) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const user = await User.findOne({ where: { userName: inputUserName } });
  if (!user) return res.status(403).json({ message: 'No user found' });

  if (user) return res.status(200).json({ message: 'ok' });
});

export default router;
