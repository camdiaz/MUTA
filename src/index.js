const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const materialsRouter = require('./routes/materialsRoutes');
const collectionsRouter = require('./routes/collectionsRoutes');
const userRouter = require('./routes/userRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Public routes (without authentication)
app.use('/login', userRouter);

// Middleware of authentication for private routes
app.use(authMiddleware);

// Private routes (They need authentication)
app.use('/materials', materialsRouter);
app.use('/collections', collectionsRouter);

// Server
app.listen(PORT, () => {
  console.log(`⚡ Server listening on port ${PORT}`);
});
