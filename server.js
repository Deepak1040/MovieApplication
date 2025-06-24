const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan')

const app = express();
app.use(express.json());
app.use(morgan(`:remote-addr [:date] ":method :url" :status - :response-time ms`));

morgan.token('date', () => {
  const date = new Date();

  const formatted = date.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  const capitalized = formatted.replace(/(am|pm)/, (match) => match.toUpperCase());
  return `${capitalized} IST`;
});

const { swaggerUi, swaggerSpec } = require('./swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


app.listen(process.env.PORT, () => {
  console.log(`🚀 Server started on http://localhost:${process.env.PORT}`);
});

app.use('/api/v1/users', require('./routes/User'));
app.use('/api/v1/theater', require('./routes/Theater'));
app.use('/api/v1/movie', require('./routes/Movie'));



