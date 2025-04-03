const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log('Token reçu :', token); // Ajoutez ce log

        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        console.log('Token décodé :', decodedToken); // Ajoutez ce log

        const userId = decodedToken.userId;
        req.auth = { userId };

        next();
    } catch (error) {
        console.error('Erreur d\'authentification :', error); // Ajoutez ce log
        res.status(401).json({ error: 'Requête non authentifiée !' });
    }
};