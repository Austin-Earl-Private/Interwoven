const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authorization = req.get('Authorization');
    if (!authorization) {
        const error = new Error('Not Authorized');
        error.statusCode = 401;
        throw error;
    }
    const token = req.get('Authorization').split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(
            token,
            '+.T[OCFypreQvjNpd!QAk_B%R@fEXoAv(K,hw3BuIHF|2xiz)j&;RxqEE?+|Z@s'
        );
    } catch (err) {
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken) {
        const error = new Error('Not Authorized');
        error.statusCode = 401;
        throw error;
    }
    req.userId = decodedToken.userId;
    req.isMod = decodedToken.isMod;
    next();
};
