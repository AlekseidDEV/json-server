import { debounce } from "./helpers"
import { render } from "./render"
export const searchUsers = () => {
   const searchInput = document.getElementById('search-input') // нахожу инпут
    

   const inputSearchText = () => { // здесь я вызываю метод поиска, и передаю туда значение с инпута, по которому и будет производится поиск
            userService.getSearchUsers(searchInput.value).then(users => {
                render(users);
            })
   }

   searchInput.addEventListener('input',  debounce(inputSearchText, 500)) // обработчик событий, который запускает декоратор
}
