import { type DecodedJwt } from './types';

export default class Jwt {
    public static decode(token: string | null | undefined): DecodedJwt | null {
        if (!token) return null;
        const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
        return JSON.safeParse<DecodedJwt>(
            decodeURIComponent(
                atob(base64)
                    .split('')
                    .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                    .join(''),
            ),
        );
    }

    public static isExpired(token: string | null | undefined): boolean {
        const decoded = Jwt.decode(token);
        if (!decoded) return true;
        return Date.now() >= decoded.exp * 1000;
    }
}
