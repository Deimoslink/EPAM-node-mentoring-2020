import {Sequelize} from 'sequelize';

// @ts-ignore
const DB_CONNECTION_URI: string = process.env.DB_CONNECTION_URI;
export const sequelize = new Sequelize(DB_CONNECTION_URI, {
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});
