export interface LoginResponse {
  email: string;
  userType: string;
  banned: boolean;
  accessToken: string;
}