const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info: {
    title: 'REST API for my App',
    version: '1.0.0', 
    description: 'This is the REST API for my product', 
  },
  host: 'localhost:3000', 
  basePath: '/',
};

const options = {
  swaggerDefinition,
  apis: ['./swagger/**/*.yaml'],
};

module.exports = swaggerJSDoc(options);