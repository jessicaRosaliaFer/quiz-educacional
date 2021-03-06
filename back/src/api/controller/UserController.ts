import * as UserService from '../../database/services/UserService'
import { User } from '../dto/User';
import { Request as ExRequest } from 'express';
import {
    Controller,
    Get,
    Request,
    Route,
    Security,
    Path,
} from "tsoa";
import { allScopes } from '../../utils';

@Route("user")
export class UserController extends Controller {
    /**
     * Dados do usuário logado.
     * @returns Dados do usuário logado.
     */
    @Security("jwt", allScopes)
    @Get()
    public async me(@Request() request: ExRequest): Promise<User> {
        return UserService.getById(request.body.userId);
    }

    /**
     * Dados do usuário pelo ID
     * @param userId ID do usário
     * 
     * @returns Dados do usuário logado.
     */
    @Security("jwt", allScopes)
    @Get("{userId}")
    public async getUser(@Path() userId: number): Promise<User> {
        return UserService.getById(userId);
    }
}
