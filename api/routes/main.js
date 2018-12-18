import { Router } from 'express';

let router = Router()

router.get('/', (req, res) => {
  res.send({
    message: 'Hello world'
  });
});

export default router;