import { Injectable } from "@nestjs/common";
import { UserDTO } from "src/users/interfaces/user.dto";

@Injectable()
export class AuthService {
    constructor() {}

    login(email: string, password: string) {
        
    }

    signUp(createUserDto: UserDTO) {

    }

    logout(token: string) {

    }
}