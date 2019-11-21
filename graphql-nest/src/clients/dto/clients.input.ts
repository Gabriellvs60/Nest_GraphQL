import { Field, InputType } from 'type-graphql'

@InputType()
export class inputClient {
    @Field() 
    readonly name: string

    @Field() 
    readonly phone: string
}