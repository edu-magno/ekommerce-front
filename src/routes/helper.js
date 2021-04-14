import { HomePage, LoginPage, RegisterPage } from '../domains/';

export const routes = [
  { path: '/', name: 'Home', page: HomePage },
  { path: '/login', name: 'Login', page: LoginPage },
  { path: '/register', name: 'Register', page: RegisterPage },
];
