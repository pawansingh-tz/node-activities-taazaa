import {
  Table,
  Column,
  DataType,
  HasMany,
} from 'sequelize-typescript'
import { Phone } from './Phone'

@Table({
  tableName: 'users',
  timestamps: false,
})
export class User {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number

  @Column(DataType.STRING)
  name!: string

  @Column(DataType.INTEGER)
  age!: number

  @HasMany(() => Phone)
  phones!: Phone[]
}
