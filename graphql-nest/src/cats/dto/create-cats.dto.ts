import { Field, ObjectType} from 'type-graphql'
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class CreateCatsDto {
    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    nickName: string;
}