import { defineStore } from 'pinia';


export const useAuthStore = defineStore('auth',{
    state: () => ({
        user: null
    }),
    getters: {
        getId: (state) => state.user.id,
        getName: (state) => state.user.name,
        getEmail: (state) => state.user.email,
        getBiography: (state) => state.user.biography,
        getCreationDate: (state) => state.user.creation_date,
        getLastUpdateDate: (state) => state.user.last_update_date,
        getAuthenticated: (state) => state.user.authenticated
    },
    actions: {
        setUser(user) {
            this.user = {...user};
            
        },
        updateUser(body){
            this.user = { ...this.user, ...body };
        },
        logout() {
            const token = useCookie('token')
            token.value = null;
            this.user = null;
        }
    },
    persist: true,
});