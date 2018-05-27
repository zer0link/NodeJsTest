const jwt = require('jsonwebtoken');
const secret = '6a787e73-7eb9-4aea-8291-856bc3e83b23';

module.exports = {
    sign(user) {
        let token = jwt.sign(user, secret, { expiresIn: 3600 });
        return token;
    },

    verifyToken(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            
            jwt.verify(bearerToken, secret, (err, payload) => {
                if(payload !== 'undefined'){
                    req.token = bearerToken;
                    req.user = payload;
                    next();
                }
                else{
                    res.sendStatus(403);        
                }
            });
        } else {
            res.sendStatus(403);
        }
    }
}