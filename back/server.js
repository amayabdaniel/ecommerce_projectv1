const app = require('./app');
const connectDatabase = require('./config/database');

const dotenv = require('dotenv');
dotenv.config({ path: 'back/config/config.env' });

connectDatabase();


const server = app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT} in mode ${process.env.NODE_ENV}`);
});