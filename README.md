Idée principale : Outils de gestion d'une agence de voiture de location avec la possibilité de voirs les les marques, les modèles de voitures disponibles et les utilisateurs qui l'utilise. 

L'import d'une API externe va nous permettre de savoir les frais de circulation en rentrant une entrée et une sortie de la ville de départ/arrivée selon le kilométrage.
Selon le modèle de la voiture, du prix d'achat et du kilométrage le coéfficient multiplicateur augmentera ou pas.
Lien de l'API externe : https://fr.open-street.com/doc/api/route/



Service : users.js / marque.js / modele.js 
  Marque.js : contiendra les marques disponibles des voitures 
  Modèle.js : contiendra les modèles disponible selon les marques avec leur kilomètre et l'année du véhicule avec l'id
  User.js : contiendra les utilisateurs des voitures avec leur Nom/Prénom/Date de naissance ainsi que leur id
  
Controler : user.js / marque.js / modele.js / axios.js ? 

Router : user.js / marque.js / modele.js 
  
