const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Configuration object for the SwaggerJSDoc
const options = {
  definition: {
    openapi: "3.0.0", // Specify the OpenAPI spec version
    info: {
      title: "MUTA BACKEND API", // Title of the API
      version: '1.0.0' // Version of the API
    },
    components: {
      securitySchemes: {
        bearerAuth: { // Define the security scheme for bearer auth (JWT)
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [{ // Apply the security globally to all endpoints
      bearerAuth: [] // Reference the security scheme defined above
    }]
  },
  apis: [ // Array of files to include in the Swagger documentation
    'src/routes/collectionRoutes.js',
    'src/routes/materialRoutes.js',
    'src/routes/userRoutes.js',
    'src/routes/recyclingRoutes.js',
    'config/config.json',
  ]
}

// Generate the Swagger specification using the options defined above
const swaggerSpec = swaggerJSDoc(options);

// Function to setup and serve the Swagger documentation
const swaggerDocs = (app, port) => {
  // Serve the Swagger UI on the '/api/docs' route
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
  // Serve the raw Swagger JSON specification on the '/api/docs.json' route
  app.get('/api/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json'); // Set the content type to JSON
    res.send(swaggerSpec); // Send the Swagger specification as a response
  });
  
  // Log to the console the URL where the Swagger UI is available
  console.log(
    `📄 Version 1 Docs are available at http://localhost:${port}/api/docs`
  );
};

module.exports = { swaggerDocs };
