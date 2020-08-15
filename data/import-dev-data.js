const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Item = require('../models/ItemModel');

dotenv.config({ path:'./.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.MONGODB);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
}).then( () => console.log('DB Connected successfully!'));

//  READ JSOM FILE
const items = JSON.parse(
    fs.readFileSync(`${__dirname}/items.json`)
  );
  
  //IMPORT DATA INNTO DB
  const importData = async () => {
    try {
      await Item.create(items);
      console.log('data succesfully loaded');
    } catch (error) {
      console.log(error);
    }
    process.exit();
  };
  
  // DELETE ALL DATA FROM DB
  const deleteData = async () => {
    try {
      await Item.deleteMany();
      console.log('data succesfully deleted');
    } catch (error) {
      console.log(error);
    }
    process.exit();
  };
  
  if (process.argv[2] === '--import') {
    importData();
  } else if (process.argv[2] === '--delete') {
    deleteData();
  }
  
  