export interface MiddlewareParams {
    loggedIn?: boolean;
    name: string | undefined;
    path: `/${string}` | '*';
}
