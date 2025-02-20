import type { User, UserCreateParams } from '@lsa-cursos-refactor/models'
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from 'tsoa'
import { UsersService } from './usersService'

@Route('users')
export class UsersController extends Controller {
  @Get('{id}')
  public async getUser(
      @Path() id: string,
      @Query() name?: string,
  ): Promise<User> {
    return new UsersService().get(id, name)
  }

  @SuccessResponse('201', 'Created')
  @Post()
  public async createUser(
      @Body() body: UserCreateParams,
  ): Promise<void> {
    this.setStatus(201)
    new UsersService().create(body)
  }
}
