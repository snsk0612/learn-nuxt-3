import type { userWithoutPassword } from "~/types/user"

export const useAuthUser = () => useState<Maybe<userWithoutPassword>>('user', () => null);

// export const useAuthUser = () => {
//     const isAuthenticated = computed(() => !!authUser.value);
//     const isAdmin = computed(() => !!authUser.value?.roles.includes('ADMIN'));

//     return {
//         authUser,
//         isAuthenticated,
//         isAdmin,
//     }
// }