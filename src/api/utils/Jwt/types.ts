export interface DecodedJwt {
    content: JwtContent;
    token: string;
    nbf: number;
    exp: number;
    iat: number;
    iss: string;
    aud: string;
}

export interface JwtContent {
    id: string;
    role: number;
}
