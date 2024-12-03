import type { UserCreateParams } from '@pnpm-nx-monorepo/models'
import { User } from '@pnpm-nx-monorepo/models'

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
