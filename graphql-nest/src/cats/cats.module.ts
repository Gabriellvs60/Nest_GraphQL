import { Module } from "@nestjs/common";
import { CatsResolver } from "./cats.resolver";
import { CatsService } from './cats.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatsEntity } from "./cats.entity";

@Module({
    imports: [ TypeOrmModule.forFeature([ CatsEntity ]) ],
    providers: [CatsResolver, CatsService]
  })
  export class CatsModule {}
  