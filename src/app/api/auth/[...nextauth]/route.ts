import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: '749484223638-sj03tqaopvps3qt9khemj0om38kd4gh3.apps.googleusercontent.com' as string,
            clientSecret: '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' as string,
        }),
    ],
});

export {handler as GET, handler as POST};