import { render } from "./render" // импортируем рендер для обновления таблицы

export const changePermissons = () => {
    const tbody = document.querySelector('#table-body')

    const permissionUserFunc = (e) => { 
        if(e.target.closest('input[type=checkbox]')){ // проверяю сам клик по закрывающему элемениту
            const tr = e.target.closest('tr') // получаю строку где был произведен клик на инпут
            const input = tr.querySelector('input[type=checkbox]') // получаю сам этот инпут
            const id = tr.dataset.key // и из него достаю дата атрибут с ключом (номер)

            userService.changeUser(id, {permissions : input.checked} ).then(() => { // здесь я передаю этот ключ, по которому буду искать данные в запросе, и передаю объект, те данные которые меняю
                userService.getUsers().then(users => { // в метод PATH можно передавать одну строку с данными, и она без проблем поменяется в существуещем объекте
                    render(users)
                 })
            })
         }
    }

    tbody.addEventListener('click' , permissionUserFunc) // навешиваю обработчик по клику
}