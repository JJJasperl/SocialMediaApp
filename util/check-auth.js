
const { AuthenticationError } = require('apollo-server');

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config')


module.exports = (context) => {
    // context = {... headers}
    const authHeader = context.req.headers.authorization;
    if (authHeader) {
        // Bearer ...
        const token = authHeader.split('Bearer ')[1];
        if (token) {
            
            try {
                
                const user = jwt.verify(token, SECRET_KEY);
                console.log(1);
                
                return user;
            } catch(err) {
                throw new AuthenticationError('Invalid/Expired token');
            }
        }
        throw new Error('Authentication token must be \'Bearer [token]');
    }
    throw new Error('Authentication header must be provided');
}