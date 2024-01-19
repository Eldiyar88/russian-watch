import { Router } from 'express';
// import bcrypt from 'bcrypt';
import { User } from '../../../db/models';
import generateTokens from '../../utils/generateTokens';
import cookieConfig from '../../config/cookiesConfig';

const router = Router();

router.post('/login', async (req, res) => {
  const { userName, password } = req.body;

  if (!(userName && password)) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const user = await User.findOne({ where: { userName } });

  if (!user) return res.status(403).json({ message: 'No user found' });
  let correctPass = false;
  // await bcrypt.compare(password, user.password);
  if (password === user.password) {
    correctPass = true;
  }

  if (!correctPass) {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  const plainUser = user.get();
  delete plainUser.password;

  const { access, refresh } = generateTokens({ user: plainUser });

  res
    .cookie('accessToken', access, cookieConfig.access)
    .cookie('refreshToken', refresh, cookieConfig.refresh)
    .sendStatus(200);
});

router.get('/logout', (req, res) => {
  res.clearCookie('accessToken').clearCookie('refreshToken').sendStatus(200);
});

export default router;
