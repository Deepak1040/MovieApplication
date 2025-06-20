const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // To read .env file

const user =require('./routes/User')

const app = express();
app.use(express.json());

const { swaggerUi, swaggerSpec } = require('./swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));


app.listen(process.env.PORT, () => {
  console.log(`🚀 Server started on http://localhost:${process.env.PORT}`);
});
