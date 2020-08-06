import {Sequelize} from 'sequelize';

const DB_CONNECTION_URI = 'postgres://nhpzxiodushcda:b1a8611ad6c850db7d792e9620dc4948e0791fe95fc28ee38d44718f8621d100@ec2-54-247-71-245.eu-west-1.compute.amazonaws.com:5432/d6vfgchv3n8p38';
export const sequelize = new Sequelize(DB_CONNECTION_URI, {
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});
