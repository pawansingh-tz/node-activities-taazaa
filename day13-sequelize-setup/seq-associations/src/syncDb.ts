import { sequelize } from './db'

sequelize.sync({ alter: true })
  .then(() => console.log('DB synced'))
  .catch(console.error)
