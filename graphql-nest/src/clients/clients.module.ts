import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClientsEntity } from "./clients.entity";
import { ClientsResolver } from "./clients.resolver";
import { ClientsService } from "./clients.service";


@Module({
    imports: [TypeOrmModule.forFeature([ClientsEntity])],
    providers: [ClientsResolver, ClientsService]
  })
  export class ClientsModule {}
  