import { Injectable } from '@nestjs/common';
import { CreateCatsDto } from './dto/create-cats.dto';
import { CatsEntity } from './cats.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {

    constructor (@InjectRepository(CatsEntity) private readonly CatsRepository: Repository<CatsEntity>) {}

    async createCat(data: CreateCatsDto) :Promise<CatsEntity>{
        let cat = new CatsEntity();
        cat.name = data.name;
        cat.nickName = data.nickName;

        await this.CatsRepository.save(cat)

        return cat;
    }

    async getCats(){
        return await this.CatsRepository.find()
    }
}
