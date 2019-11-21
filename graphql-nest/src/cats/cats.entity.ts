import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('cats')
export class CatsEntity {
    @PrimaryGeneratedColumn() 
    id: number;

	@Column()
	name: string

	@Column()
	nickName: string
}