// jour4/server.js

// via POSTMAN => faire une requete GET => retourner tous les enresgristement
// stockés dans la base de données

// via POST => faire une requete POST => enregistrer ce que je mets dans POSTMAN
// retourner toute la base de données 

const express = require("express");
const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

// connecté à la base
const urlBdd = "mongodb+srv://ifocop_admin:azerty1234@cluster0-yozxs.mongodb.net/test?retryWrites=true&w=majority";
const optionConnexion = {
    useNewUrlParser : true ,
    useUnifiedTopology: true
}
mongoose.connect(urlBdd , optionConnexion)
        .then(function(){
            console.log("connexion réussie")
        })
        .catch(function(err){
            console.log(err)
        });

const schemaCategory = mongoose.Schema({
    nom : String
})

// liaison schema à une table = Model

const Category = mongoose.modele("categorie", schemaCategory);

/////////////////////////////

const app = express(); 

app.get("/" , async function(req,res){
    const resultat = await Category.find();
    res.send(resultat);
    // http://localhost:3222
})

app.use(express.json());

app.post("/", async function(req,res){

    // récupérer les informations qui sont dans le body de la requête POST
    const body = req.body;
    
    // vérifier que les informations sont conformes : via Joi

    const schema = Joi.object({
        nom : Joi.string().min(3).max(255).required()
    });

    const verif = schema.validate(body);

    // si c'est ko => status 400 + c'est quoi qui va pas + arrête

    if(verif.error){
        res.status(400).send(verif.error.details[0].message);
        return;
    }

    // effectivement ajouter les informations dans la base de données MOngoDB
    const categoryToSave = new Category(body);
    await categoryToSave.save();
    const resultat = await Category.find();
    res.send(resultat);

})


app.listen(3222); 

// shell nodemon server.js