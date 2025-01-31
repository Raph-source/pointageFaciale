const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentation des APIs",
      version: "1.0.0",
      description: "Ces APIs fournissent tout les services requis afin de mettre en place le système d'optimisation du tutorat d'UDBL",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./documentation_swagger/commentaire/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
