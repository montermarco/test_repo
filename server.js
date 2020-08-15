const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path:'./.env' });
const app = require('./app');

const DB = process.env.MONGODB_URI;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
}).then( () => console.log('DB Connected successfully!'));


const port = process.env.PORT || 4000;
app.listen(port, ()=> {
    console.log(`App running on port ${port} ...`);    
});