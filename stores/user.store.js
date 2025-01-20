import { defineStore } from 'pinia';

export const useUserStore = defineStore('user',{
    state: () => ({
        id: null,
        name: null,
        email: null,
        biography: null,
        creation_date: null,
        last_update_date: null,
        authenticated: null,
    }),
    getters: {
        getId: (state) => state.id,
        getName: (state) => state.name,
        getEmail: (state) => state.email,
        getBiography: (state) => state.biography,
        getCreationDate: (state) => state.creation_date,
        getLastUpdateDate: (state) => state.last_update_date,
        getAuthenticated: (state) => state.authenticated
    },
    actions: {
        async getUserData(token) {
            this.user = { loading: true };
            try {
                this.user = await getUserDataService(token);    
            } catch (error) {
                this.user = { error };
            }
        },
        async updateUserData(paramId, body, token) {
            //TO TEST
            const response = await updateUserDataService(paramId,body, token);

            if (response.ok) {
                // update local storage
                this.user = { ...this.user, ...body };
            }      
        }
    }
});