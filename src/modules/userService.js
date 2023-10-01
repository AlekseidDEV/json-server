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
    } // здесь я как раз таки принемаю объект со строкой data, и изменяю данные на сервере

    getUser(id){
        return fetch(`http://localhost:3000/users/${id}`).then((resp) => resp.json())
    } // получаю отдельного юзера по его айдишнику

    editUser(id,user){
        return fetch(`http://localhost:3000/users/${id}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
            
        }).then((resp) => resp.json())
    } // тут как раз таки мы затираем полностью старый объект с данными, и записываем новый

    filterUsers(filterOption){
        return fetch(`http://localhost:3000/users?${filterOption}=true`).then(resp => resp.json())
    } // тут идет запрос по фильтру, я передаю данные filterOption, по которым и будут выводится нужные мне объекты

    getSortUsers(sortOptions){
        return fetch(`http://localhost:3000/users?_sort=${sortOptions.name}&_order=${sortOptions.value}`).then(resp => resp.json())
    }// здесь идет сортировка по двум параметра, первый это sortOptions.name, в моем случае он равен children, ибо сортировка на этот раздел стоит, и передаю sortOptions.value, как раз так то флажок, который определяет порядок сортировки

    getSearchUsers(str){
        return fetch(`http://localhost:3000/users?name_like=${str}`).then(resp => resp.json())
    } // тут я делаю запрос по не полному совпадению вроде бы, я передаю значение с инпута в параметр str, и ищу по этим совпадениям данные на сервере. В данном случае поиск стоит по полю name
 }
//  если по простому, то это класс, который экспортируется в индекс. Здесь делаются как раз таки
// таки запросы в базу. Тут и получаем пользователей, и записываем, и удаляем