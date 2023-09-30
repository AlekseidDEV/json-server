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
 }
//  если по простому, то это класс, который экспортируется в индекс. Здесь делаются как раз таки
// таки запросы в базу. Тут и получаем пользователей, и записываем, и удаляем