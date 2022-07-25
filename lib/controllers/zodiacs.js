const { Router } = require('express');
const router = Router();
const { zodiacs } = require('../../data/zodiacs');

router
  .get('/:id', (req, res) => {
    const zodiac = zodiacs.find((zodiac) => zodiac.id === req.params.id);
    res.json(zodiac);
  })
  .get('/', (req, res) => {
    // console.log(zodiac);

    const data = zodiacs.map((zodiac) => {
      return { 
        id: zodiac.id, 
        name: zodiac.name,
        dates: zodiac.dates,
        symbol: zodiac.symbol,
      };
    });
    res.json(data);
  });

module.exports = router;
