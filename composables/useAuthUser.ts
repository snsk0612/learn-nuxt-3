import type { userWithoutPassword } from "~/types/user"

const authUser = ref<Maybe<userWithoutPassword>>(null);

export const useAuthUser = () => {
    const isAuthenticated = computed(() => !!authUser.value);
    const isAdmin = computed(() => !!authUser.value?.roles.includes('ADMIN'));

    return {
        authUser,
        isAuthenticated,
        isAdmin,
    }
}