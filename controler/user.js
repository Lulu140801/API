const jwt = require('jsonwebtoken');
const db = require('../models/index'); // same as ../models
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
   bcrypt.hash(req.body.password, 10).then((hash) => {
      db.users.create({
         user: req.body.user,
         password: hash
      }).then((user) => {
         res.status(201).json({success: true, user});
      }).catch((e) => {
         res.status(400).json({success: false, message: 'Impossible de créer l\'utilisateur'});
      })
   }).catch((e) => {
      res.status(400).json({success: false, message: 'Impossible de hasher le mot de passe'});
   });
};

 exports.login = (req, res, next) => {
    // SELECT * FROM users;
    // SELECT * FROM users  WHERE  email LIKE "email@ynov.com"
   db.users.findOne({ where : {email: req.body.user}}).then(
     (user) => {
       if (!user) {
         return res.status(401).json({
           error: new Error('Utilisateur non trouvé!')
         });
       }
       bcrypt.compare(req.body.password, user.password).then(
         (valid) => {
           if (!valid) {
             return res.status(401).json({
               error: new Error('Mot de passe incorrect!')
             });
           }
           const token = jwt.sign(
             { userId: user._id },
             'RANDOM_TOKEN_SECRET',
             { expiresIn: '24h' });
           res.status(200).json({
             userId: user._id,
             token: token
           });
         }
       ).catch(
         (error) => {
           res.status(500).json({
             error: error
           });
         }
       );
     }
   ).catch(
     (error) => {
       res.status(500).json({
         error: error
       });
     }
   );
 }

