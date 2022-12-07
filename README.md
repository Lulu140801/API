Idée principale : Outils de gestion d'une agence de voiture de location avec la possibilité de voirs les les marques, les modèles de voitures disponibles et les utilisateurs qui l'utilise. 

User : on va permettre de pouvoir créer un comprofil et s'enregistrer pour mettre la location de véhicule 

L'import d'une API externe va nous permettre de savoir les frais de circulation en rentrant une entrée et une sortie de la ville de départ/arrivée selon le kilométrage.

Service : users.js / marque.js / modele.js 
  Marque.js : contiendra les marques disponibles des voitures 
  Modèle.js : contiendra les modèles disponible selon les marques avec leur kilomètre et l'année du véhicule avec l'id
  User.js : contiendra les utilisateurs des voitures avec leur Nom/Prénom/Date de naissance ainsi que leur id
  
Controler : user.js / marque.js / modele.js / axios.js ? 

Router : user.js / marque.js / modele.js 

Selon le modèle de la voiture, du prix d'achat et du kilométrage le coéfficient multiplicateur augmentera ou pas.

Lien de l'API externe : https://fr.open-street.com/doc/api/route/

Pour pouvoir utiliser le sign up, installer la commande ci dessous
///  npm install bcrypt

Pour l'utilisation des tokens, installer le commande ci dessous
/// npm install jsonwebtoken


L'équipe est composé de 3 personnes qui sont Théo Garcia, Lucas Lagnes et Clément Marty.
Nous nous sommes rapidement vite entendu car nous sommes amis dans la vrai vie.

Notre API servirai à une entreprise qui voudrait louer des voitures à des particulier comme à des proffessionnel. 

BASE DE DONNEES : géré avec sqlite
