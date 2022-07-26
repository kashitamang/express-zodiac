const { Router } = require('express');
const router = Router();
// const { horoscopes } = require('../../data/horoscopes');
const fetch = require('cross-fetch');

router
  .get('/', async (req, res) => {
    const data = await fetch('https://ohmanda.com/api/horoscope/aquarius/');
    const horoscope = await data.json();
    // console.log(horoscope);
    res.send(horoscope);
  });

module.exports = router;

