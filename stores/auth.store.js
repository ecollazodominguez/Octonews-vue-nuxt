import { defineStore } from 'pinia';
import { loginService } from '~/services/login.service';


export const useAuthStore = defineStore('auth',{
    state: () => ({
        token: null,
        errorMessage: null
    }),
    getters: {
        getErrorMessage: (state) => state.errorMessage,
        getToken: (state) => state.token
    },
    actions: {
        updateToken() {
            this.errorMessage = null;
            const token = localStorage.getItem('token')
            this.token = token
        },
        async login(email, password) {
            try {
                this.errorMessage = null;
                const token = await loginService(email,password);    

                // update pinia state
                this.token = token;

                // store user details and jwt in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', token)
            } catch (error) {
                this.errorMessage = error.message;
            }
        },
        logout() {
            this.errorMessage = null;
            this.token = null;
            localStorage.removeItem('token');
        }
    }
});