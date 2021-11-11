declare module 'types-app' {
  export type UserType = { email: string; password: string; name: string };
  export type GlobalType = { loggedIn: boolean; loadingSession: boolean };
  export type UserStateType = {
    user: any;
    posts: Array<any>;
    following: Array<any>;
  };
}
