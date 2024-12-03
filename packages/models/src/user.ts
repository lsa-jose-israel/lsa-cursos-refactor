export interface IUser {
  id: string
  name: string
  email: string
}

export class User implements IUser {
  constructor(
    public id: string,
    public name: string,
    public email: string,
  ) {}

  static fromMap(map: Record<string, unknown>): User {
    return new User(
      map.id as string,
      map.name as string,
      map.email as string,
    )
  }

  toMap(): Omit<User, 'toMap'> {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    }
  }
}

export type UserCreateParams = Pick<User, 'name' | 'email' >
