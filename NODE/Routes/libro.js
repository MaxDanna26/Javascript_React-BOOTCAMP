import express from 'express'
const router = express.Router();

router.get('/alta', (req, res) => {
  res.send('Formulario alta');
});

export default router;