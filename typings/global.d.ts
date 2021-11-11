declare module 'types-app' {
  export type UserType = { email: string; password: string; name: string };
  export type GlobalType = { loggedIn: boolean; loadingSession: boolean };
  export type UserStateType = {
    currentUser: string | null;
    posts: Array<any>;
    following: Array<any>;
  };
}
