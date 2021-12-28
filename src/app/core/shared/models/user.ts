export class LoginRequest {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}


export interface IUserData {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  createdAt: string,
  updatedAt: string,
  image: any,
  roles: IRole,
  accessToken: string
}

export interface IRole {
  id: number,
  role: string,
  permission: string
}
