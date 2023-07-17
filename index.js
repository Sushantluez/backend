const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const fileUpload = require('express-fileupload')
mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://sushantlama49:Hunter25l@cluster0.qywui5z.mongodb.net/Shopy').then((result) => {
  app.listen(5000);

}).catch((err) => {
  console.log(err);
})

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
  abortOnLimit: true,
  createParentPath: true
}));

app.use(userRoutes);
app.use(productRoutes);



app.use((req, res) => {
  return res.status(404).json({
    message: 'not found'
  });
});