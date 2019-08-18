import express from 'express';

const app = express();
app.use('/testimony', (req, res) => {
  res.send('what a beautiful name it is');
});
app.listen(process.env.PORT || 9999);
