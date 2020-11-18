import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

import { TokenDTO } from './interfaces/token.dto';
import { Token } from "./models/token.entity";

@Injectable()
export class TokensService {
    constructor(@Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<Token>,) {}

    async findOne(id: string) {
        return await this.tokenRepository.findOneOrFail(id);
    }

    async createToken(createTokenDto: TokenDTO) {
        const token = await this.tokenRepository.create(createTokenDto);
        return await this.tokenRepository.save(token);
    }

    async deleteToken(token: string) {
        const [token1] = await this.tokenRepository.find({ token })
        return await this.tokenRepository.delete(token1.id);
    }

}