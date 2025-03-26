import type { userWithoutPassword } from "~/types/user"
import { getUser } from "./usersData";
import { useAuthUser } from "./useAuthUser";

export const useAuth = () => {
    // const { authUser } = useAuthUser();
    const authUser = useAuthUser();
    
    const signIn = (email: string, password: string) => {
    const foundUser = getUser(email, password);

    if (!foundUser) {
        throw createError({
        statusCode: 401,
        statusMessage: 'Invalid email or password',
        });
    }
    setUser(foundUser);
    };

    const setUser = (user: Maybe<userWithoutPassword>) => (authUser.value = user);

    const signOut = () => setUser(null);

    return {
    signIn,
    signOut,
    };
};