import { Sequelize } from 'sequelize-typescript'
import { User } from './models/User'
import { Phone } from './models/Phone'

// export const sequelize = new Sequelize({
//   database: 'test_db',
//   dialect: 'mysql',
//   username: 'root',
//   password: 'password',
//   models: [User, Phone],
// })


export const sequelize = new Sequelize('seq-crud', 'postgres', 'Kasia@123', {
  host: 'localhost',
  dialect: 'postgres',
  
});
