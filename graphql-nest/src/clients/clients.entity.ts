import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity('clients')
export class ClientsEntity extends BaseEntity{
    @PrimaryGeneratedColumn() 
    id: number;

	@Column()
	name: string

	@Column()
	phone: string
}