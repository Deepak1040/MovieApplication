const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "My Node API",
            version: "1.0.0",
            description: "API documentation for Node.js backend"
        },
        servers: [
            {
                url: "http://localhost:3000/"
            }
        ]
    },
    apis: ["./routes/*.js"] // path to the API docs (comments in route files)
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };
