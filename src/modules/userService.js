 export class UserService {
    getUsers(){
        return fetch("http://localhost:3000/users").then(resp => resp.json())
    }

    addUser(user){
        return fetch("http://localhost:3000/users", {
            method : "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then((resp) => resp.json())
    }

    removeUser(id){
        return fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        }).then((resp) => resp.json())
    }

    changeUser(id, data){
        return fetch(`http://localhost:3000/users/${id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
            
        }).then((resp) => resp.json())
    }

    getUser(id){
        return fetch(`http://localhost:3000/users/${id}`).then((resp) => resp.json())
    }

    editUser(id,user){
        return fetch(`http://localhost:3000/users/${id}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
            
        }).then((resp) => resp.json())
    }

    filterUsers(filterOption){
        return fetch(`http://localhost:3000/users?${filterOption}=true`).then(resp => resp.json())
    }

    getSortUsers(sortOptions){
        return fetch(`http://localhost:3000/users?_sort=${sortOptions.name}&_order=${sortOptions.value}`).then(resp => resp.json())
    }

    getSearchUsers(str){
        return fetch(`http://localhost:3000/users?name_like=${str}`).then(resp => resp.json())
    }
 }
//  если по простому, то это класс, который экспортируется в индекс. Здесь делаются как раз таки
// таки запросы в базу. Тут и получаем пользователей, и записываем, и удаляем