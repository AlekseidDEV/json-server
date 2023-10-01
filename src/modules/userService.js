import { errorMessFunc } from "./errorMess";
export class UserService {
    getRequest(url) {
        return fetch(url)
            .then((resp) => resp.json())
            .catch((error) => {
                errorMessFunc(error);
            });
    }

    postRequest(url, obj) {
        return fetch(url, obj)
            .then((resp) => resp.json())
            .catch((error) => {
                errorMessFunc(error);
            });
    }

    getUsers() {
        return this.getRequest("http://localhost:3000/users");
    }

    addUser(user) {
        return this.postRequest("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
    }

    removeUser(id) {
        return this.postRequest(`http://localhost:3000/users/${id}`, {
            method: "DELETE",
        });
    }

    changeUser(id, data) {
        return this.postRequest(`http://localhost:3000/users/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
    }

    getUser(id) {
        return this.getRequest(`http://localhost:3000/users/${id}`);
    }

    editUser(id, user) {
        return this.postRequest(`http://localhost:3000/users/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
    }

    filterUsers(filterOption) {
        return this.getRequest(
            `http://localhost:3000/users?${filterOption}=true`
        );
    }

    getSortUsers(sortOptions) {
        return this.getRequest(
            `http://localhost:3000/users?_sort=${sortOptions.name}&_order=${sortOptions.value}`
        );
    }

    getSearchUsers(str) {
        return this.getRequest(`http://localhost:3000/users?name_like=${str}`);
    }
}
