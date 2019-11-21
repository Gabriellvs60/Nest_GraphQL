import { Resolver, Query, Args,Mutation } from "@nestjs/graphql";
import { CatsService } from "./cats.service";
import { CatsEntity } from "./cats.entity";
import { CreateCatsDto } from "./dto/create-cats.dto";
import { inputCat } from "./dto/cats.input";

@Resolver((of) => CatsEntity)
export class CatsResolver {
       constructor(
         private readonly catsService: CatsService,
       ) {}

    @Query(() => [CreateCatsDto])
    async listCats() {
        return this.catsService.getCats()
    }

    @Mutation(() => CreateCatsDto)
    createCat(@Args('data') data: inputCat){
        console.log(data);
        return this.catsService.createCat(data);
        
    }
}