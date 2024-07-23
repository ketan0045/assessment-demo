const jwt = require('jsonwebtoken');


const decodeToekn = (token) => {
    const secretKey = 'your-secret-key';
    try {
        const decoded = jwt.verify(token, secretKey);
        console.log('Decoded token:', decoded);
    } catch (error) {
        console.error('Token decoding failed:', error.message);
    }
}

export {decodeToekn}