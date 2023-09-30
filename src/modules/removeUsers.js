import { render } from "./render" // импортируем рендер для обновления таблицы

export const removeUsers = () => {
    const tbody = document.querySelector('#table-body') // находим таблицу

    const removeUserFunc = (e) => { // запускаем функцию, получаем event
        // ставим условие, если клик произойдет на элементе, у которого есть родитель(закрывающий элемент) с классом .btn-danger
        // то запускаем следующее
        if(e.target.closest('.btn-danger')){
            const tr = e.target.closest('tr') // получаем все строку из таблицы
            const id = tr.dataset.key // обращаемся к дата атрибуту этой строки, и получаем ее айдишник

            userService.removeUser(id).then(() => { // запускаем метод delete и передаем туда айдишник
                userService.getUsers().then(users => { // получаем свежие данные из бд и отрисовываем их на страницу
                    render(users)
                 })
            })
        }
    }

    tbody.addEventListener('click' , removeUserFunc) // навешиваем делегирование на таблицу
}