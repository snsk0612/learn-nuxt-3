// /auth/post (POST)

import { getUserByEmail } from "~/server/models/user";
import { verifyPassword } from "~/server/utils/password";

export default defineEventHandler(async (event) => {
    const body = readBody<{ email: string, password: string }>(event);

    const { email, password } = await body;

    if ( !email || !password ) {
        throw createError ({
            status: 400,
            statusMessage: 'Email address and password are required',
        });
    }

    const userWithPassword = getUserByEmail(email);

    if (!userWithPassword) {
        throw createError({
            status: 401,
            statusMessage: 'Bad credentials',
        });
    }

    const verified = verifyPassword(password, userWithPassword.password);
    if (!verified) {
        throw createError ({
            status: 401,
            statusMessage: 'Bad credentials',
        });
    }

    const { password: _password, ...userWithoutPassword } = userWithPassword;

    setCookie(event, '__user', JSON.stringify(userWithoutPassword));

    return {
        user: userWithoutPassword,
    };
});