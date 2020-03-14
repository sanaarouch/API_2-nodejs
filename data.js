// jour4/data.js

// créer une application : besoin de nombreuses informations 
// solution :
// 1 créer pleins de variables
// 2 créer de tableaux qui vont contenir des tableaux ... = collections 
// 3 stocker toutes nos donnée dans une base de données !!

// => solution 3 qui va être utilisée 

// quelquesoit la base de données 
// 1 se connecter 
// mongoose.connect( "url" , {propriete : true})
// retourne deux méthodes .then() => connexion est établie 
//                        .catch() => s il y a une erreur dans l'url 

// réaliser un CRUD 

// schema = aspect des données 

// liaison entre le schéma et l'onglet (collection) = modele 

// Maintenant je peux enfin faire de manipulation avec la base de données 

// Push() ===  create === insert 

// const modele = new Modele({ "nom" : "nouvelle catégorie"});
// modele.save()

// read == récupérer tous les enregistrements dans une collection

// Modele.find()


// read == pour 1 seul enregistrement

// Modele.find({ _id : 1}) // SELECT * FROM categorie WHERE _id LIKE 1%