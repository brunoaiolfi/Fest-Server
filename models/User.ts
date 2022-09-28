export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type ResponseLogin = {
  userName: string;
  token: string;
};

export type TokenResponse = {
  email: string;
  id: number;
};
