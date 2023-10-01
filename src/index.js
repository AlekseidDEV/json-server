import { addUsers } from "./modules/addUsers";
import { changePermissons } from "./modules/changePermissions";
import { editUsers } from "./modules/editUsers";
import { filterUsers } from "./modules/filterUsers";
import { removeUsers } from "./modules/removeUsers";
import { render } from "./modules/render";
import { searchUsers } from "./modules/searchUsers";
import { sortUsers } from "./modules/sortUsers";
import { UserService } from "./modules/userService";
// импорты, здесь все понятно

window.userService = new UserService //создаем новый объект от класса, и кладем его в глобальный объект window

userService.getUsers().then(data => { //обращаемся к методу объекта, раскрываем дзен, и вытыскиваем оттуда масив пользователей, который передаем на отрисовку
   render(data) // вызов самой функции отрисовки
})

addUsers()
removeUsers()
changePermissons()
editUsers()
filterUsers()
sortUsers()
searchUsers()




