import type { UserCreateParams } from '@lsa-cursos-refactor/models'
import { User } from '@lsa-cursos-refactor/models'

export class UsersService {
  public get(id: string, name?: string): User {
    return new User(id, name ?? 'Jane Doe', 'jane@doe.com')
  }

  public create(userCreateParams: UserCreateParams): User {
    return User.fromMap({
      id: Math.floor(Math.random() * 10000),
      ...userCreateParams,
    })
  }
}
