const db = require('../database');

module.exports = {
  getDailynotes: (req, res) => {
    db.getnotes((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },

  postDailynotes: (req, res) => {
    let data = req.body;
    console.log(data);
    db.postnotes(data, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },

  postfoodlog: (req, res) => {
    let data = req.body;
    console.log(data);
    db.postfoodlog(data, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },

  getfoodlog: (req, res) => {
    let date = req.query.date;
    console.log(date);
    db.getfoodlog(date, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
};