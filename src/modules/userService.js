 export class UserService {
    getUsers(){
        return fetch("http://localhost:3066/users").then(resp => resp.json())
    }

    addUser(user){
        return fetch('http://localhost:3066/users', {
            method : "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(resp => console.log(resp))
        .catch(() => {
            alert('что то не работает')
        })
    }
 }