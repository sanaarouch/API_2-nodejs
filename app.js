// jour4/app.js

// lancer le shell dans le dossier qui contient app.js
// créer le fichier package.json => npm init --yes
// télécharger deux modules :  
// npm i express
// npm i @hapi/joi 

// démarrer le serveur => nodemon app.js

// 1ère chose installer les deux librairies

const express = require("express");

const routerCategories = require("./router/categories");

const app = express(); 

app.use(express.json()); // OBLIGATOIRE POUR faire fonctionner le POST
                        // OBLIGATOIREMENT AVANT le POST
                        // fonction Middleware 

// http://localhost:4004/categories + GET
// http://localhost:4004/categories/1 + GET
// http://localhost:4004/categories + POST + 
/*
{
    "id": 5,
    "nom" : "AJAX"
}
*/ 
app.use("/categories", routerCategories);


app.listen(4004);