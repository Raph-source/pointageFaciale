const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors');
const { swaggerUi, swaggerSpec } = require("./documentation_swagger/documentationSwagger");

const app =  express()
app.use(cors());

// Middleware pour parser les données JSON
app.use(express.json());
app.use(bodyParser.json());

//le type des données des formulaires
app.use(bodyParser.urlencoded({ extended: true }));

//les routes
const agent = require("./routeur/agent")

//entrée des endpoints
app.use('/', agent);

// Documentation de APIs
app.use("/documentation-api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, ()=>{
    console.log("Serveur lancé")
})
