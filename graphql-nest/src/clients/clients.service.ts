import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientsEntity } from './clients.entity';
import { CreateClientsDto } from './dto/create-clients.dto';
import { inputClient } from './dto/clients.input';

@Injectable()
export class ClientsService {

    constructor (@InjectRepository(ClientsEntity) private readonly ClientsRepository: Repository<ClientsEntity>) {}

    async createClient(data: CreateClientsDto) :Promise<ClientsEntity>{
        let client = new ClientsEntity();
        client.name = data.name;
        client.phone = data.phone;
        await this.ClientsRepository.save(client)
        return client;
    }

    async getClients(){
        return await this.ClientsRepository.find()
    }

    async getClientById(
        id: number,
        data: ClientsEntity,
        ): Promise<ClientsEntity> {
        const found = await this.ClientsRepository.findOne({where: {id, clientId: data.id} });
        if (!found) {
            throw new NotFoundException("Task with ID not found");
        }
        return found;
    }

//     async update(
//         id: number, 
//         data:ClientsEntity,
//        ): Promise<ClientsEntity>{
//        const client = await this.getClientById(id, data);
//        client.name = data.name;
//        client.phone = data.phone;
//        client.save();
//        return client;
//    } 

    
}
