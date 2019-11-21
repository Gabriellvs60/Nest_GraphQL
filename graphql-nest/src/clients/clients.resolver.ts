import { Resolver, Query, Args,Mutation } from "@nestjs/graphql";
import { ClientsEntity } from "./clients.entity";
import { ClientsService } from "./clients.service";
import { CreateClientsDto } from "./dto/create-clients.dto";
import { inputClient } from "./dto/clients.input";

@Resolver((of) => ClientsEntity)
export class ClientsResolver {
       constructor(
         private readonly clientService: ClientsService,
       ) {}

    @Query(() => [CreateClientsDto])
    async getClients() {
        return this.clientService.getClients()
    }

    @Mutation(() => CreateClientsDto)
    createClient(@Args('data') data: inputClient){
        return this.clientService.createClient(data);   
    }

//   @Mutation(returns => ClientsEntity)
//   async updateUser(@Args('data') data: ClientsEntity, @Args('id') id: number): Promise<ClientsEntity> {
//     return this.clientService.update(id, data);
//   }

    @Mutation(returns => Boolean)
    async deleteUser({ id }): Promise<boolean> {
    return this.clientService.delete(id);
  }
}