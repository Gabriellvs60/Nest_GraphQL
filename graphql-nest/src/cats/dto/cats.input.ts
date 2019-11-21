import { Field, InputType } from 'type-graphql'

@InputType()
export class inputCat {
    @Field() 
    readonly name: string

    @Field() 
    readonly nickName: string
}