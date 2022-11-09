const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myfitness', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

// user
const userSchema = mongoose.Schema({
  weight: Number,
  height: Number,
  gender : Number,
  goal : Number
});

const User = mongoose.model('User', userSchema);

// daily note
const notesSchema = mongoose.Schema({
  date: Date,
  description: String
});

const Notes = mongoose.model('Notes', notesSchema);

// food log
const foodlogSchema = mongoose.Schema({
  date: String,
  energy : Number,
  protein : Number,
  fat : Number,
  carb : Number
});

const Foodlog = mongoose.model('Foodlog', foodlogSchema);

let getnotes = (callback)=>{
  Notes.find({})
  .exec(function(err, data) {
    if(err){
      console.log('Error from find in db');
    }
    callback(null, data);
   });

};

let postnotes = (data, callback)=>{

  let newUser = {
    date: data.date,
    description: data.description
  };

  let new_repo = new Notes(newUser).save((err, data) => {
    if (err) {
      callback('err from db index save', err);
    } else {
      callback(null, data);
    }
  });

};

let postfoodlog  = (data, callback)=>{

  let new_log = new Foodlog(data).save((err, data) => {
    if (err) {
      callback('err from db index save', err);
    } else {
      callback(null, data);
    }
  });

};

let getfoodlog = (date, callback)=>{
  Foodlog.find({ date : date })
  .exec(function(err, data) {
    if(err){
      console.log('Error from find in db');
    }
    callback(null, data);
   });

};

module.exports.getnotes = getnotes;
module.exports.postnotes = postnotes;
module.exports.postfoodlog = postfoodlog;
module.exports.getfoodlog = getfoodlog;