const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const materialRoutes = require('./routes/materialsRoutes');
const collectionRoutes = require('./routes/collectionsRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3030;

// Middleware
app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(materialRoutes);
app.use(collectionRoutes);

app.get('/', (req, res) => res.status(200).send({
  message: 'Server connected',
}));

app.listen(PORT, () => {
  console.log(`⚡ Server listening on port ${PORT}`);
});
