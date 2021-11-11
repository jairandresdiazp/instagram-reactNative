declare module 'types-app' {
  export type UserType = { email: string; password: string; name: string };
  export type GlobalType = { loggedIn: boolean; loadingSession: boolean };
}
