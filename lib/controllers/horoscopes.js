const { Router } = require('express');
const router = Router();
const { horoscopes } = require('../../data/horoscopes');


router
  .get('/:sign', (req, res) => {
    const horoscope = horoscopes.find((horoscope) => horoscope.sign === req.params.sign);
    res.json(horoscope);
  })
  .get('/', (req, res) => {
    // console.log(data);

    const readingData = horoscopes.map((horoscope) => {
      return { 
        sign: horoscope.sign, 
        reading: horoscope.reading,
      };
    });
    res.json(readingData);
  });

module.exports = router;

