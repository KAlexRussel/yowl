import { defineStore } from 'pinia'


export const useUserStore = defineStore('user', {
    state: () => ({
        user: [],
        users: [],
        authenticate: false,
        UserInfo: null,

    }),
    persist: true,
    actions: {


        async getUsers() {
            const user = JSON.parse(localStorage.getItem('user'))
            const TokenValue = user.token

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + TokenValue
            }

            const response = await fetch("http://127.0.0.1:8000/api/users", {
                method: "GET",
                headers: headers,

            });
            if (!response.ok) {

                return await response.json();
            }
            const data = await response.json()
            this.users = data
        },
        async DeleteUser(id) {
            const user = JSON.parse(localStorage.getItem('user'))
            const TokenValue = user.token

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + TokenValue
            }
            const response = await fetch("http://127.0.0.1:8000/api/users" + id, {
                method: "DELETE",
                headers: headers,

            });
            if (!response.ok) {
                return response.json();
            }

        },
        hideUser(id) {
            this.users = this.users.filter(user => user.id != id);

        },
        async AddUser(name, email, password, isadmin) {
            const user = JSON.parse(localStorage.getItem('user'))
            const TokenValue = user.token

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + TokenValue
            }
            const response = await fetch("http://127.0.0.1:8000/api/users", {
                method: "POST",
                headers: headers,
                body: JSON.stringify({ name: name, password: password, email: email, isadmin: isadmin }),

            });
            if (!response.ok) {
                return response.json();
            }


        },

        async EditUser(username, email, password, isadmin=0) {
            const user = JSON.parse(localStorage.getItem('user'))
            const TokenValue = user.token

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + TokenValue
            }
            const response = await fetch("http://127.0.0.1:8000/api/users", {
                method: "PUT",
                headers: headers,
                body: JSON.stringify({ username: username, password: password, email: email, isadmin: isadmin }),

            });
            if (!response.ok) {
                return response.json();
            }

        }


    }
})