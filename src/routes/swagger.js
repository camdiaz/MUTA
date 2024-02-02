const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Metadata info abput the MUTA BACKEND API
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MUTA BACKEND API",
      version: '1.0.0'
    },
  },
  apis: [
    'src/routes/collectionRoutes.js',
    'src/routes/materialRoutes.js',
    'src/routes/userRoutes.js',
    'config/config.json',
  ]
}

// Docs on JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
const swaggerDocs = (app, port) => {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec)
  })
  console.log(
    `📄 Version 1 Docs are avaliable at http://localhost:${port}/api/docs`
  );
};

module.exports = { swaggerDocs };
