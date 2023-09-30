import { addUsers } from "./modules/addUsers";
import { removeUsers } from "./modules/removeUsers";
import { render } from "./modules/render";
import { UserService } from "./modules/userService";
// импорты, здесь все понятно

window.userService = new UserService //создаем новый объект от класса, и кладем его в глобальный объект window

userService.getUsers().then(data => { //обращаемся к методу объекта, раскрываем дзен, и вытыскиваем оттуда масив пользователей, который передаем на отрисовку
   render(data) // вызов самой функции отрисовки
})

addUsers()
removeUsers()




