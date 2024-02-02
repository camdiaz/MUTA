const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const materialRoutes = require('./routes/materialRoutes');
const collectionRoutes = require('./routes/collectionRoutes');
const userRoutes = require('./routes/userRoutes');
const recyclingRoutes = require('./routes/recyclingRoutes');
// const { verifyToken } = require('./middlewares/authorization');
const { swaggerDocs: SwaggerDocsV1 } = require('./routes/swagger');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3030;

SwaggerDocsV1(app, PORT);

// Middleware ----- These are using authentication. TAKE CARE ABOUT THE ORDER
app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(materialRoutes);
app.use(collectionRoutes);
app.use(recyclingRoutes);

app.get('/', (req, res) => res.status(200).send({
  message: 'MUTA TEST SERVER',
}));

app.listen(PORT, () => {
  console.log(`⚡ Server listening on port ${PORT}`);
});
