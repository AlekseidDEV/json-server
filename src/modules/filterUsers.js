import { render } from "./render"
export const filterUsers = () => {
    const btnIsChildren = document.getElementById('btn-isChildren')
    const btnIsPermission = document.getElementById('btn-isPermissions')
    const btnIsAll = document.getElementById('btn-isAll')


    btnIsChildren.addEventListener('click', () => {
        userService.filterUsers('children').then(users => {
            render(users)
        })
    })

    btnIsPermission.addEventListener('click', () => {
        userService.filterUsers('permissions').then(users => {
            render(users)
        })
    })
    // смысл первых двух обработчиков в том, что я запускаю обработчик по клику, запускаю метод фильтра, передаю туда слово, по которому надо фильтровать, и получая нужные данные с сервера, рендерю их на странницу

    btnIsAll.addEventListener('click', () => {
        userService.getUsers().then(users => {
            render(users)
         })
    })
    // здесь все проще, что бы получить всех пользователей по нажатию на кнопку, нужно просто запросить этих всех пользователей
}