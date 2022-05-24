const express = require('express');
const dotenv = require('dotenv');
const conversor = require('./conversorCor')

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Converter RGB para hexadecimal 
app.post('/rgbToHex', (req, res) => {
  const red = parseInt(req.body.red);
  const green = parseInt(req.body.green);
  const blue = parseInt(req.body.blue);

  const hex = conversor.rgbToHex(red, green, blue);

  res.send({ 'hexadecimal': hex });
})

app.get('/rgbToHex', (req, res) => {
  const red = parseInt(req.query.red);
  const green = parseInt(req.query.green);
  const blue = parseInt(req.query.blue);

  const hex = conversor.rgbToHex(red, green, blue);

  if (req.query.red == undefined || req.query.green == undefined || req.query.blue == undefined) {
    res.send({ 'message': 'Formato de cor incorreta' });
  }
  res.send({ 'hexadecimal': hex });
})

// Converter hexadecimal para RGB
app.post('/hextoRgb', (req, res) => {
  const hex = req.body.hex;
  const rgb = conversor.hexToRgb(hex);

  res.send({ 'rgb': rgb });
})

app.get('/hextoRgb', (req, res) => {
  if (!(req.query.hex == undefined)) {
    const hex = req.query.hex;
    const rgb = conversor.hexToRgb(hex);

    res.send({ 'rgb': rgb });
  }
  res.send({ 'message': 'Formato de cor incorreta' });
})


app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
})