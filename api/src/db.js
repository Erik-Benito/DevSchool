import initdb from './models/init-models.js'
import Sequelize from 'sequelize';
const sequelize = new Sequelize(
'dev',
'root',
'1234', {
host: '127.0.0.1',
dialect: 'mysql',
logging: false
});
const db = initdb(sequelize);
export default db;