export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
} | null; 

export type Nonprofit = {
  name: string;
  description: string;
  image: string;
  link: string;
  cause: string;
}