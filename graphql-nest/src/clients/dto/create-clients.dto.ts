import { Field, ObjectType} from 'type-graphql'
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class CreateClientsDto {
    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    phone: string;
}