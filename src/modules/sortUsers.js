import { render } from "./render"

export const sortUsers = () =>{
    const teaderSortIsChildren = document.getElementById('sort-is-children') // поле, по которому будет производится клик

    let isSort = false // флажок

    teaderSortIsChildren.style.cursor = 'pointer'

    const sortFunc = () => {
        isSort = !isSort // изменяю флажок по нажатию

        userService.getSortUsers({ // запускаю метод сортировки и передаю в него объект данных
            name: 'children', // свойство по которому будет производится сортировка
            value: isSort ? 'asc' : 'desc' // здесь в зависимости значения флажка, будет производится сортивка. Либо в одном порядке, либо в другом
        }).then(users => {
            render(users)
        })
    }

    teaderSortIsChildren.addEventListener('click', sortFunc)
}