const express = require('express');
const bodyParser = require('body-parser');
const TimeData = require('../model/timemodel');

const router = express.Router();
router.use(bodyParser.json());

router.post('/api/save-time-data', async (req, res) => {
  try {
    const { timeStarted, timeEnded, timeTaken, tries, currentWord } = req.body; 

    
    const timeData = new TimeData({
      timeStarted,
      timeEnded,
      timeTaken,
      tries,
      currentWord, 
    });

    
    await timeData.save();
    console.log('Request Body:', req.body);

    res.status(200).send('Time data saved successfully');
  } catch (error) {
    console.error('Error saving time data:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
