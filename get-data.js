const mongoose = require("mongoose");
const urlBdd = "mongodb+srv://ifocop_admin:azerty1234@cluster0-0yrkh.mongodb.net/test?retryWrites=true&w=majority";

const optionConnexion = {
    useNewUrlParser : true ,
    useUnifiedTopology: true
};

mongoose.connect(urlBdd , optionConnexion)

.then(function(){
    console.log("connexion réussie");

})

.catch(function(err){
    console.log(err)
});

//shell nodemon get-data.js

// pour manipuler

// 2 créer un schéma = définir l'aspet de mes données = les noms des colonnes

const schemaCategorie = mongoose.Schema({
    nom : String
})

//3 liaison entre le schema et une table = onglet Excel = Modele

const Category = mongoose.model("categorie", schemaCategorie)

//lorsque l'on fait des manipulations sur une base de données
//il y a une latence du réseau

async function getAllData()
{
    const resultat = await Category.find();
    console.log(resultat);
}

getAllData();
