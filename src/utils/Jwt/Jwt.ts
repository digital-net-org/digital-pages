import { type DecodedJwt, type JwtContent } from './types';

interface DecodedJwtRaw extends Omit<DecodedJwt, 'content'> {
    Content: string;
}

export default class Jwt {
    public static decode(token: string | null | undefined): DecodedJwt | null {
        if (!token) return null;
        const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
        const jwt = JSON.safeParse<DecodedJwtRaw>(
            decodeURIComponent(
                atob(base64)
                    .split('')
                    .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                    .join(''),
            ),
        );
        return jwt ? Jwt.buildContent(jwt) : null;
    }

    private static buildContent(decoded: DecodedJwtRaw): DecodedJwt {
        return {
            ...decoded,
            content: JSON.safeParse<JwtContent>(decoded.Content.toLowerCase())!,
        };
    }

    public static isExpired(token: string | null | undefined): boolean {
        const decoded = Jwt.decode(token);
        if (!decoded) return true;
        return Date.now() >= decoded.exp * 1000;
    }
}
